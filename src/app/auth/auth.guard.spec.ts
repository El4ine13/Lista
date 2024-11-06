import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard'; // Certifique-se de que este caminho esteja correto
import { AuthService } from './auth.service'; // Ajuste o caminho se necessário
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    const authServiceStub = {
      isAuthenticated: () => true // Simula que o usuário está autenticado
    };

    const routerStub = {
      navigate: () => {} // Simula a navegação
    };

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceStub },
        { provide: Router, useValue: routerStub }
      ]
    });

    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access to authenticated users', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    const result = guard.canActivate({} as any, {} as any);
    expect(result).toBeTrue();
  });

  it('should not allow access to unauthenticated users', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    const result = guard.canActivate({} as any, {} as any);
    expect(result).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
