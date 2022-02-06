type Format = '$' | '%'

export function formatNumber(value: number, format: Format): string {
    switch (format) {
        case '%':
            return Math.round(value).toString() + "%";
            break;
        case '$':
            return value.toLocaleString("pt");
            break;
    }
}