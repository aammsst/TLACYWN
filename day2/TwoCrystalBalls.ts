export default function two_crystal_balls(breaks: boolean[]): number {

    const sqrtN = Math.floor(Math.sqrt(breaks.length));
    let step = sqrtN;
    let base = 0;

    while (step <= breaks.length) {
        if (breaks[step]) {
            for (let i = base; i < base + step; i++) {
                if (breaks[i]) {
                    return i;
                }
            }

        } else {
            base = step;
            step += sqrtN;
        }
    }

    return -1;
}

/*
My solution passed the test! here is Prime's solution

export default function two_crystal_balls(breaks: boolean[]): number {

    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;

    for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

*/
