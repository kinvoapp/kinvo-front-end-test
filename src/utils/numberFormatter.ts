type Format = '$' | '%'

export function formatNumber(value: number, format: Format): string {
    switch (format) {
        case '%':
            return value.toLocaleString("pt") + "%";
            break;
        case '$':
            return value.toLocaleString("pt");
            break;
    }
}