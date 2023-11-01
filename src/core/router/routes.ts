import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createCharacter: string;
  editCharacter: string;
  character: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  createCharacter: '/characters/create',
  editCharacter: '/characters/edit/:id',
  character: '/characters/:id'
};

type NavigationFunction = (id: string) => string;
/*type Interface1 = Omit<SwitchRoutes,'editCharacter'>;
type Interface2 =  Omit<Interface1,'character'>;*/

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter'| 'character'> {
  editCharacter: NavigationFunction;
  character: NavigationFunction; 
}
/*interface LinkRoutes extends Interface2 {
 editCharacter: NavigationFunction;
 character: NavigationFunction; 
}*/
/*interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter'> {
  editCharacter: NavigationFunction;
}*/

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  character: (id) => generatePath(switchRoutes.character, { id }),
};
