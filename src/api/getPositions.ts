export enum EPosition {
  'Lawyer',
  'Content manager',
  'Security',
  'Designer',
}

export interface PositionInterface {
  id: number
  name: EPosition
}

export const getPositions = async (): Promise<PositionInterface[]> => {
  let positions: PositionInterface[] = []
  await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      positions = res.positions
    })
    .catch(() => console.error('can not get positions'))
  return positions
}
