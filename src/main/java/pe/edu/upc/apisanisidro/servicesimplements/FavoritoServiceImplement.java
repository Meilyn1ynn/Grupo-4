package pe.edu.upc.apisanisidro.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.apisanisidro.entities.Favorito;
import pe.edu.upc.apisanisidro.repositories.FavoritoRepository;
import pe.edu.upc.apisanisidro.servicesinterfaces.IFavoritoService;

import java.util.List;

@Service
public class FavoritoServiceImplement implements IFavoritoService {
    @Autowired
    private FavoritoRepository repository;

    @Override
    public List<Favorito> list() {
        return repository.findAll();
    }

    @Override
    public void insert(Favorito f) {
        repository.save(f);
    }

    @Override
    public Favorito listId(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Override
    public void update(Favorito f) {
        repository.save(f);
    }
}