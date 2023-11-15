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
interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter'| 'character'> {
  editCharacter: NavigationFunction;
  character: NavigationFunction; 
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  character: (id) => generatePath(switchRoutes.character, { id }),
};
