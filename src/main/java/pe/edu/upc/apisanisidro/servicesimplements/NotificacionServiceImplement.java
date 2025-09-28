package pe.edu.upc.apisanisidro.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.apisanisidro.entities.Notificacion;
import pe.edu.upc.apisanisidro.repositories.NotificacionRepository;
import pe.edu.upc.apisanisidro.servicesinterfaces.INotificacionService;

import java.util.List;

@Service
public class NotificacionServiceImplement implements INotificacionService {
    @Autowired
    private NotificacionRepository repository;

    @Override
    public List<Notificacion> list() {
        return repository.findAll();
    }

    @Override
    public void insert(Notificacion n) {
        repository.save(n);
    }

    @Override
    public Notificacion listId(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Override
    public void update(Notificacion n) {
        repository.save(n);
    }
}