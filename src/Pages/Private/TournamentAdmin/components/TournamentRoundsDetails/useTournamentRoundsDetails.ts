import { useState } from 'react';
import { get } from 'lodash';
import { Tournament, TournamentRound, CreateRoundMatchesDocument } from '@/types';
import { useMutation } from '@apollo/client';


export const useTournamentRoundsDetails = (handleCreate: (data: any) => void, tournamentData: Tournament | undefined) => {
  const defaultMatchValues = {
    "local1": '', "local2": '', "local3": '', "local4": '', "local5": '', "local6": '',
    "localDraw1": '', "localDraw2": '', "localDraw3": '', "localDraw4": '', "localDraw5": '', "localDraw6": '',
    "away1": '', "away2": '', "away3": '', "away4": '', "away5": '', "away6": '',
    "awayDraw1": '', "awayDraw2": '', "awayDraw3": '', "awayDraw4": '', "awayDraw5": '', "awayDraw6": ''
  }
  const [expanded, setExpanded] = useState<string | false>(false);
  const [open, setOpen] = useState(false);
  const [showField, setShowField] = useState(false);
  const [matchResults, setMatchResults] = useState(defaultMatchValues)

  const [fetch] = useMutation(CreateRoundMatchesDocument, {
    onCompleted: (result) => console.log('result', result),
    onError: (error) => console.log('errors', error),
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      if (showField) {
        setShowField(false);
        setMatchResults(defaultMatchValues)
      }
    };

  const handleFields = () => {
    if (showField) {
      setMatchResults(defaultMatchValues)
    }
    setShowField(!showField)
  };

  const onSubmit = (data: any, matches: number) => {
    const parsedData = [...Array(matches).keys()].map((item) => {
      return {
        tournamentId: parseInt(tournamentData?.id || '0', 10),
        clubIdHome: parseInt(get(data, `home${item}`, '0'), 10),
        clubIdAway: parseInt(get(data, `away${item}`, '0'), 10),
        round: parseInt(data.round, 10),
      };
    });
    handleCreate(parsedData);
  };

  const onSubmitRoundMatch = (data: any, rounds: TournamentRound[] | undefined) => {
    if (rounds) {
      const dataRoundMatches = rounds.map((round, index) => {
        const home = parseInt(data[`local${index + 1}`], 10);
        const away = parseInt(data[`away${index + 1}`], 10);
        const homeDraw = parseInt(data[`localDraw${index + 1}`], 10);
        const awayDraw = parseInt(data[`awayDraw${index + 1}`], 10);

        const returnPoints = (local: boolean) => {
          if (local) {
            if (home === away) return homeDraw > awayDraw ? 2 : 1
            return home > away ? 3 : 0
          }
          if (home === away) return homeDraw > awayDraw ? 1 : 2
          return home > away ? 0 : 3
        }
        return {
          "roundId": parseInt(round.id, 10),
          "clubHomeScore": home,
          "clubHomeScoreDraw": homeDraw || null,
          "clubHomePoints": returnPoints(true),
          "clubAwayScore": away,
          "clubAwayScoreDraw": awayDraw || null,
          "clubAwayPoint": returnPoints(false)
        }
      });

      fetch({
        variables: {
          data: dataRoundMatches
        }
      })
      setShowField(false);
      setMatchResults(defaultMatchValues);
    }

  }

  return {
    handleClose,
    open,
    onSubmit,
    handleOpen,
    expanded,
    handleChange,
    showField,
    handleFields,
    matchResults,
    setMatchResults,
    onSubmitRoundMatch
  }
}
