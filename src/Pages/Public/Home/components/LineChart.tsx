import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { PlayerRound } from '@/types';
import { get } from 'lodash';
import { FormControlLabel, Checkbox, Box, Avatar } from '@mui/material';
import { PlayerRoundScores, ObjSum } from './LineChart.types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Performance de Equipos',
    },
  },
};

export const sumScore = (data: PlayerRound[], key: string) => {
  var result: PlayerRoundScores[] = [];
  data.reduce((res: ObjSum, value) => {
    const keyName = get(value, key) as keyof typeof res;
    if (!res[keyName]) {
      res[keyName] = { ...value, score: 0, roundScore: {} };
      result.push(res[keyName]);
    }
    res[keyName].score += value.score;
    const round = get(value, 'round.round');
    if (!res[keyName].roundScore[round as any]) {
      res[keyName].roundScore[round as any] = value.score;
    } else {
      res[keyName].roundScore[round as any] += value.score;
    }
    return res;
  }, {});
  return result;
};

const sumBefore = (array: number[]) => {
  const result: number[] = [];
  array.reduce((a, b) => {
    result.push(a + b);
    return a + b;
  }, 0);
  return result;
};

const getInformation = (data: PlayerRound[]) => {
  return sumScore(data, 'player.clubId');
};

const LineChart = ({ dataList }: { dataList: PlayerRound[] }) => {
  const [total, setTotal] = useState(false);
  const [teams, setTeams] = useState<number[]>([]);
  const clubInfo = getInformation(dataList);

  const labels = [...new Set(dataList.map((item) => item.round?.round))];

  const data = {
    labels,
    datasets: clubInfo
      .filter((item) => !teams.includes(item.player.clubId))
      .map((club) => ({
        label: club.player?.club.name,
        data: total
          ? sumBefore(Object.values(club.roundScore))
          : Object.values(club.roundScore),
        borderColor: `#${club.player.club.color}`,
        backgroundColor: `#${club.player.club.color}`,
      })),
  };

  const handleCheck = (value: number) => {
    if (teams.includes(value)) {
      setTeams(teams.filter((item) => item !== value));
    } else {
      setTeams([...teams, value]);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '40px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'wrap',
          justifyContent: 'center',
          gap: '30px',
        }}
      >
        {clubInfo.map((player) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            key={player?.player?.clubId}
          >
            <Avatar
              alt="Remy Sharp"
              src={player?.player?.club?.image}
              sx={{
                backgroundColor: `#${player.player.club.color}`,
                padding: '2px',
              }}
            />
            <Checkbox
              checked={!teams.includes(player?.player?.clubId)}
              onChange={() => handleCheck(player?.player?.clubId)}
            />
          </Box>
        ))}
      </Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={total}
            onChange={(e) => setTotal(e.target.checked)}
          />
        }
        label="Acumulable"
      />
      <Line options={options} data={data} />
    </Box>
  );
};

export default LineChart;
