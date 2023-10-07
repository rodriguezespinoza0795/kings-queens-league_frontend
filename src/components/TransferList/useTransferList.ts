import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CreateTournamentGroupDocument, Tournament } from '@/types';

export const useTransferList = (defaultValue: number[][], catalogue: any[], tournamentData: Tournament) => {
  const [checked, setChecked] = useState<readonly number[]>([]);
  const leftData = defaultValue[0].length === 0 ? catalogue.map(item => parseInt(item.id, 10)) : defaultValue[0]
  const [left, setLeft] = useState<readonly number[]>(leftData);
  const [right, setRight] = useState<readonly number[]>(defaultValue[1]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  function not(a: readonly number[], b: readonly number[]) {
    return a.filter((value) => b.indexOf(value) === -1);
  }

  function intersection(a: readonly number[], b: readonly number[]) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }

  const [fetch] = useMutation(CreateTournamentGroupDocument, {
    onCompleted: (data) => console.log('data', data),
    onError: (error) => console.log('errors', error),
  });

  const handleCreate = () => {
    const leftData = left.map(item => {
      return {
        tournamentId: parseInt(tournamentData.id, 10),
        name: "A",
        clubId: item
      }
    })
    const rightData = right.map(item => {
      return {
        tournamentId: parseInt(tournamentData.id, 10),
        name: "B",
        clubId: item
      }
    })
    fetch({
      variables: {
        data: [...leftData, ...rightData]
      },
    });
  }

  return {
    handleToggle,
    checked,
    left,
    handleCheckedRight,
    leftChecked,
    handleCheckedLeft,
    rightChecked,
    right,
    handleCreate
  };
};
