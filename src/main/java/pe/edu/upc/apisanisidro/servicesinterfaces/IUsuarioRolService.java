package pe.edu.upc.apisanisidro.servicesinterfaces;
import pe.edu.upc.apisanisidro.entities.UsuarioRol;

import java.util.List;

public interface IUsuarioRolService {
    public List<UsuarioRol> list();
    public void insert(UsuarioRol ur);
    public UsuarioRol listId(int id);
    public void delete(int id);
    public void update(UsuarioRol ur);
}
