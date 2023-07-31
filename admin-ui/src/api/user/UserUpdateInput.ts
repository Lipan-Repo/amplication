import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  mobileNo?: string | null;
  nickname?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
