export type Action = {
    type: string;
    payload: Payload;
}

type Payload = string | number | { key: string } | boolean | Array<string | number | [] | { key: string }>;