import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdminWhereInput = {
  adminName?: StringNullableFilter;
  id?: StringFilter;
  permissions?: StringNullableFilter;
};