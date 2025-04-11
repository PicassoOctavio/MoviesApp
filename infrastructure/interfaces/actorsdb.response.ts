export interface CastAndCrewResponse {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

export interface PersonBase {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
}

export interface CastMember extends PersonBase {
  cast_id: number;
  character: string;
  order: number;
}

export interface CrewMember extends PersonBase {
  department: string;
  job: string;
}
