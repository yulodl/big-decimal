export default class BigDecimal {

    bn: BigInt;

    decimals: number;

    constructor(bn: bigint | string | number, decimals?: number) {
        if (typeof bn == 'bigint') {
            this.bn = BigInt(bn);
            this.decimals = decimals ?? 0;
            return;
        }

        const str = bn.toString();

        this.bn = BigInt(bn);
        this.decimals = decimals ?? 0;
    }

    toString() {
        const {bn, decimals} = this;
        const decimalStr = bn.toString();
        if (decimals) {
            const len = decimalStr.length;
            if (len > decimals) {
                const dotIdx = decimalStr.length - decimals;
                return `${decimalStr.substring(0, dotIdx)}.${decimalStr.substring(dotIdx)}`;
            }

            return `0.${decimalStr.padStart(decimals, '0')}`;
        }

        return decimalStr;
    }

    toHexString() {
        this.bn.toString(16);
    }

}
