export interface BoardMemberData {
    role: string;
    name: string;
    email: string;
}

export const BOARD_MEMBERS: Array<BoardMemberData> = [
    {
        role: 'President',
        name: 'Brandon Cook',
        email: 'bonsoccerprez@gmail.com'
    },
    {
        role: 'Treasurer',
        name: 'Bryce Klinker',
        email: 'bonsoccertreasurer@gmail.com'
    }
]
