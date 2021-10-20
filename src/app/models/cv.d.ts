import { CvSkill } from "./cv_skill";
import { Profile } from "./profile";

export interface CV{
  id: number,
  title: string,
  author: Profile,

  skills: CvSkill[],
  languages: CvSkill[]
}
