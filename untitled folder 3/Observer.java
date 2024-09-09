import java.util.List;

public interface Observer {
    void update(List<Voo> voos);
}


public class Voo {
    private String numero;
    private String empresa;
    private boolean isDecolagem;
    private String horario;

    public Voo(String numero, String empresa, boolean isDecolagem, String horario) {
        this.numero = numero;
        this.empresa = empresa;
        this.isDecolagem = isDecolagem;
        this.horario = horario;
    }

    public boolean isDecolagem() {
        return isDecolagem;
    }

    @Override
    public String toString() {
        return "Voo{" +
                "numero='" + numero + '\'' +
                ", empresa='" + empresa + '\'' +
                ", decolagem=" + isDecolagem +
                ", horario='" + horario + '\'' +
                '}';
    }
}



import java.util.ArrayList;
import java.util.List;

public class Subject {
    private List<Observer> observers = new ArrayList<>();
    private List<Voo> voos = new ArrayList<>();

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }

    public void addVoo(Voo voo) {
        voos.add(voo);
        notifyObservers();
    }

    public void removeVoo(Voo voo) {
        voos.remove(voo);
        notifyObservers();
    }

    public void updateVoo(Voo voo) {
     
        notifyObservers();
    }

    private void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(voos);
        }
    }
}




import java.util.ArrayList;
import java.util.List;

public class Subject {
    private List<Observer> observers = new ArrayList<>();
    private List<Voo> voos = new ArrayList<>();

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }

    public void addVoo(Voo voo) {
        voos.add(voo);
        notifyObservers();
    }

    public void removeVoo(Voo voo) {
        voos.remove(voo);
        notifyObservers();
    }

    public void updateVoo(Voo voo) {
        // Simular a atualização de um voo
        notifyObservers();
    }

    private void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(voos);
        }
    }
}



import java.util.List;
import java.util.stream.Collectors;

public class TotemDecolagem implements Observer {
    @Override
    public void update(List<Voo> voos) {
        List<Voo> voosDecolagem = voos.stream()
                .filter(Voo::isDecolagem)
                .collect(Collectors.toList());
        System.out.println("Totem de Decolagem atualizado:");
        voosDecolagem.forEach(System.out::println);
    }
}



import java.util.List;
import java.util.stream.Collectors;

public class TotemAterrissagem implements Observer {
    @Override
    public void update(List<Voo> voos) {
        List<Voo> voosAterrissagem = voos.stream()
                .filter(voo -> !voo.isDecolagem())
                .collect(Collectors.toList());
        System.out.println("Totem de Aterrissagem atualizado:");
        voosAterrissagem.forEach(System.out::println);
    }
}


public class Main {
    public static void main(String[] args) {
        Subject subject = new Subject();

        Observer totemDecolagem = new TotemDecolagem();
        Observer totemAterrissagem = new TotemAterrissagem();

        subject.addObserver(totemDecolagem);
        subject.addObserver(totemAterrissagem);

        Voo voo1 = new Voo("123", "Empresa A", true, "10:00");
        Voo voo2 = new Voo("456", "Empresa B", false, "12:00");

        subject.addVoo(voo1);  
        subject.addVoo(voo2);  

        subject.removeVoo(voo1);  
    }
}



