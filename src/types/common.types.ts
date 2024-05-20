import { AxiosResponse } from "axios";

export type AxiosRes<T> = Promise<AxiosResponse<T>>;
