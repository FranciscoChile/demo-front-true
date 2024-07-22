import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  // Un HashMap para almacenar la caché. La clave es la página y el valor son los datos.
  private cache = new Map<string, string>();
  // BehaviorSubject que contendrá los datos actualizados de la caché.
  public cache$ = new BehaviorSubject<string>("");

  // El método 'set' para almacenar datos en la caché.
  set(key: string, data: string): void {
    // Comprobamos si ya existen datos para esta clave.
    if (this.cache.has(key)) {
      // Si ya existen, lanzamos una excepción para evitar sobrescribir los datos.
      throw new Error(`Ya existen datos para la clave '${key}'. Utilice un key diferente o borre la existente primero.`);
    }
    // Si no existen datos para esta clave, los almacenamos en la caché y actualizamos el BehaviorSubject.
    this.cache.set(key, data);
    this.cache$.next(this.cache.get(key)!);
  }

  // El método 'get' para recuperar datos de la caché.
  get(key: string): string   {
    // Recuperamos los datos de la caché y actualizamos el BehaviorSubject.
    const data = this.cache.get(key);
    this.cache$.next(data!);
    return data!;
  }

  // El método 'clear' para borrar datos de la caché.
  clear(key: string): void {
    // Eliminamos los datos de la caché y actualizamos el BehaviorSubject.
    this.cache.delete(key);
    this.cache$.next("");
  }
}