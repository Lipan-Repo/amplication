import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  mobileNo?: string | null;
  nickname?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
