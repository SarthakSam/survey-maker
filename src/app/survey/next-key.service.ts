export class NextKeyService {
    private minIndexArr: number[];
    private totalIndices: number;
    constructor() {
        this.minIndexArr = [];
        this.totalIndices = 0;
    }

    nextKey(): number {
        if( this.minIndexArr.length == 0 )
            return this.totalIndices++;
        return this.minIndexArr.splice(0, 1)[0];    
    }

    addKey( key: number) {
        this.minIndexArr.push(key);
        this.minIndexArr.sort((a: number, b: number) => {
            return a - b;
        });
    }
}