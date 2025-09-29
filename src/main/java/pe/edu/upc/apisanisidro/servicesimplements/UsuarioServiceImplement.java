package pe.edu.upc.apisanisidro.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.apisanisidro.entities.Usuarios;
import pe.edu.upc.apisanisidro.repositories.UsuarioRepository;
import pe.edu.upc.apisanisidro.servicesinterfaces.IUsuarioService;

import java.util.List;

@Service
public class UsuarioServiceImplement implements IUsuarioService {
    @Autowired
    private UsuarioRepository repository;

    @Override
    public List<Usuarios> list() {
        return repository.findAll();
    }

    @Override
    public void insert(Usuarios u) {
        repository.save(u);
    }

    @Override
    public Usuarios listId(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Override
    public void update(Usuarios u) {
        repository.save(u);
    }

    @Override
    public List<Usuarios> buscarService(String nombre) {
        return repository.buscaPorNombre(nombre);
    }
}
