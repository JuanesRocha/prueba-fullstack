import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Usuario {
    id: number;
    nombre: string;
    correo: string;
    edad: number;
}

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
    usuarios: Usuario[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get<Usuario[]>('http://localhost:3000/api/data')
            .subscribe(data => {
                this.usuarios = data;
            });
    }
}