export class BombTimer {
    private interval: any;
    private running: boolean = false;

    constructor(
        private digits: BombTimerDigit[],
    ) {}

    public getDigits(): BombTimerDigit[] {
        return this.digits;
    }

    public toggle(): void {
        if(this.running) this.reset();
        else             this.start();
    }

    public start(): void {
        if(this.interval) clearInterval(this.interval);
        this.running = true;
        this.interval = setInterval(() => {
            this.countdown();
        }, 1000);
    }

    public reset(): void {
        clearInterval(this.interval);
        this.running = false;
        for(let digit of this.digits) {
            digit.reset();
        }
    }

    private countdown(): void {
        for(var i = this.digits.length-1; i >= 0; i--) {
            if(!this.digits[i].decrement()) {
                break;
            }
        }
    }
}

export class BombTimerDigit {
    private originalValue: number;

    constructor(
        private max: number,
        private value: number,
        private suffix: string,
        private min: number = 0,
    ) {
        this.originalValue = value;
    }
    
    public decrement(): boolean {
        this.value -= 1;
        if(this.value <= this.min) {
            this.value = this.max-1;
            return true;
        }
        return false;
    }

    public reset(): void {
        this.value = this.originalValue;
    }

    public getValue(): string {
        if(this.value > 9) {
            return `${this.value}${this.suffix}`;
        } else {
            return `0${this.value}${this.suffix}`;
        }
    }
}