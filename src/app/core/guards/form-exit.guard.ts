import { CanDeactivateFn } from '@angular/router';
import { NewPlaceComponent } from 'src/app/features/new-place/new-place.component';

export const formExitGuard: CanDeactivateFn<NewPlaceComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.isDirty) {
    return window.confirm(
      '¡El formulario está incompleto! ¿Seguro que quieres salir?'
    );
  } else {
    return true;
  }
};
