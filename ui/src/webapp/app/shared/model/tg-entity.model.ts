export const enum Category {
  ITEM = 'ITEM',
  NPC = 'NPC',
  PLAYER = 'PLAYER',
  INTERACTION = 'INTERACTION'
}

export interface ITGEntity {
  _id?: string;
  name?: string;
  description?: string;
  category?: Category;
}

export class TGEntity implements ITGEntity {
  constructor(public _id?: string, public name?: string, public description?: string, public category?: Category) {}
}
