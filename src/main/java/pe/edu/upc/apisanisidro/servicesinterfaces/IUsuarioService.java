package pe.edu.upc.apisanisidro.servicesinterfaces;

import pe.edu.upc.apisanisidro.entities.Usuarios;

import java.util.List;

public interface IUsuarioService {
    public List<Usuarios> list();
    public void insert(Usuarios u);
    public Usuarios listId(int id);
    public void delete(int id);
    public void update(Usuarios u);

    public List<Usuarios> buscarService(String nombre);
}
