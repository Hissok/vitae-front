import { CV } from "./cv";
import { DrivingLicense } from "./driving-license";
import { Skill } from "./skill";
export interface Profile{
  id: number,

  lastname?: string,
  firstname?: string,

  birthday?: Date,

  phone?: string,
  email?: string,
}
