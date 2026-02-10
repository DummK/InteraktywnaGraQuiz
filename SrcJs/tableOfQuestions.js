import {Question} from "./gameMechanics/Question.js";

//tablica z pytaniami
export const table = [];
{
    table.push(new Question(
        "Do czego służy instrukcja if w programowaniu?",
        ["Tworzy pętlę", "Deklaruje zmienną", "Sprawdza warunek i wykonuje kod", "Wyświetla komunikat"],
        "C", "programming", "easy"
    ));

    table.push(new Question(
        "Jakiego typu danych używa się do przechowywania liczb całkowitych w Javie?",
        ["double", "String", "int", "char"],
        "C", "java", "easy"
    ));

    table.push(new Question(
        "Co robi znacznik < p > w HTML?",
        ["Wstawia obraz", "Tworzy akapit", "Definiuje nagłówek", "Zmienia kolor"],
        "B", "html", "easy"
    ));

    table.push(new Question(
        "Czym różni się HTML od CSS?",
        ["HTML styluje, CSS struktury", "HTML to baza danych", "HTML i CSS to to samo", "HTML – struktura, CSS – wygląd"],
        "D", "html", "easy"
    ));

    table.push(new Question(
        "Co oznacza console.log w JavaScript?",
        ["Tworzy zmienną", "Zmienia kolor tła", "Wyświetla w konsoli", "Tworzy funkcję"],
        "C", "javascript", "easy"
    ));

    table.push(new Question(
        "Do czego służy pętla while?",
        ["Deklaruje funkcję", "Powtarza kod dopóki warunek jest prawdziwy", "Kończy program", "Wyświetla komunikat"],
        "B", "programming", "easy"
    ));

    table.push(new Question(
        "Co to jest zmienna?",
        ["Stała wartość", "Typ danych", "Miejsce w pamięci na dane", "Funkcja"],
        "C", "programming", "easy"
    ));

    table.push(new Question(
        "Jakiego operatora używamy do dodawania liczb w JavaScript?",
        ["*", "%", "-", "+"],
        "D", "javascript", "easy"
    ));

    table.push(new Question(
        "Co robi znacznik < img > w HTML?",
        ["Tworzy link", "Wstawia akapit", "Wstawia obraz", "Ustawia tło"],
        "C", "html", "easy"
    ));

    table.push(new Question(
        "Do czego służy atrybut href w < a >?",
        ["Kolor linku", "Wyświetla alert", "Tworzy obraz", "Adres, do którego prowadzi link"],
        "D", "html", "easy"
    ));

    table.push(new Question(
        "Jakiego znaku używa się do komentarza w Javie?",
        ["%%", "// lub /*...*/", "@@", "##"],
        "B", "java", "easy"
    ));

    table.push(new Question(
        "Czym jest funkcja w programowaniu?",
        ["Stała wartość", "Blok kodu wywoływany wielokrotnie", "Zmienna globalna", "Komentarz"],
        "B", "programming", "easy"
    ));

    table.push(new Question(
        "Co robi return w funkcji?",
        ["Tworzy funkcję", "Kończy pętlę", "Zwraca wartość z funkcji", "Inicjalizuje zmienną"],
        "C", "programming", "easy"
    ));

    table.push(new Question(
        "Do czego służy background-color w CSS?",
        ["Kolor tekstu", "Wyświetla obraz", "Kolor tła elementu", "Tworzy link"],
        "C", "css", "easy"
    ));

    table.push(new Question(
        "Jakiego znaku używa się do kończenia instrukcji w Java i C++?",
        [",", ".", ";", ":"],
        "C", "programming", "easy"
    ));

    table.push(new Question(
        "Co oznacza słowo kluczowe public w Javie?",
        ["Dostęp tylko w klasie", "Prywatny dostęp", "Dostęp wszędzie", "Zmienna globalna"],
        "C", "java", "easy"
    ));

    table.push(new Question(
        "Co to jest strona internetowa?",
        ["Program w Pythonie", "Dokument HTML wyświetlany w przeglądarce", "Obrazek", "Baza danych"],
        "B", "www", "easy"
    ));

    table.push(new Question(
        "Jakiego znaku używa się do definiowania selektora ID w CSS?",
        [".nazwa", "*nazwa", "#nazwa", "@nazwa"],
        "C", "css", "easy"
    ));

    table.push(new Question(
        "Czym różni się element blokowy od liniowego w HTML?",
        ["Liniowy zajmuje całą stronę", "Blokowy zajmuje całą szerokość, liniowy tylko potrzebną", "Blokowy to obraz", "Liniowy nie istnieje"],
        "B", "html", "easy"
    ));

    table.push(new Question(
        "Co robi alert() w JavaScript?",
        ["Tworzy zmienną", "Tworzy funkcję", "Wyświetla okienko z komunikatem", "Usuwa element"],
        "C", "javascript", "easy"
    ));

    table.push(new Question(
        "Czym różni się == od === w JavaScript?",
        ["=== zmienia zmienną", "== porównuje wartość, === typ i wartość", "== wyświetla alert", "== tworzy funkcję"],
        "B", "javascript", "medium"
    ));

    table.push(new Question(
        "Jak działa pętla for?",
        ["Tworzy zmienną", "Powtarza kod z inicjalizacją, warunkiem i inkrementacją", "Kończy program", "Wyświetla okienko"],
        "B", "programming", "medium"
    ));

    table.push(new Question(
        "Co to jest tablica w Java / C++?",
        ["Funkcja", "Lista elementów tego samego typu", "Zmienna globalna", "Stała"],
        "B", "programming", "medium"
    ));

    table.push(new Question(
        "Do czego służy metoda main w Javie?",
        ["Wyświetla alert", "Główna metoda startowa programu", "Tworzy HTML", "Zmienna globalna"],
        "B", "java", "medium"
    ));

    table.push(new Question(
        "Jakie są podstawowe selektory w CSS?",
        ["html(), body()", ".class, #id, element", "@id, *element", "function()"],
        "B", "css", "medium"
    ));

    table.push(new Question(
        "Co to jest funkcja anonimowa w JavaScript?",
        ["Funkcja globalna", "Funkcja bez nazwy", "Zmienna lokalna", "Stała"],
        "B", "javascript", "medium"
    ));

    table.push(new Question(
        "Jak działa dziedziczenie w Javie?",
        ["Tworzy zmienną", "Klasa przejmuje właściwości i metody innej klasy", "Wyświetla alert", "Kończy program"],
        "B", "java", "medium"
    ));

    table.push(new Question(
        "Czym różni się id od class w HTML/CSS?",
        ["class jest unikalne", "id jest unikalne, class może się powtarzać", "Nie ma różnicy", "id może się powtarzać"],
        "B", "html", "medium"
    ));

    table.push(new Question(
        "Co to jest operator modulo %?",
        ["Mnożenie", "Reszta z dzielenia", "Dzielenie", "Dodawanie"],
        "B", "programming", "medium"
    ));

    table.push(new Question(
        "Jaką rolę pełni let w JavaScript?",
        ["Stała wartość", "Deklaruje zmienną z zasięgiem blokowym", "Usuwa zmienną", "Funkcja"],
        "B", "javascript", "medium"
    ));

    table.push(new Question(
        "Co robi float w C++?",
        ["Liczba całkowita", "Typ liczby zmiennoprzecinkowej", "Zmienna tekstowa", "Operator"],
        "B", "cpp", "medium"
    ));

    table.push(new Question(
        "Co to jest div w HTML?",
        ["Nagłówek", "Element blokowy grupujący treść", "Link", "Obraz"],
        "B", "html", "medium"
    ));

    table.push(new Question(
        "Jak działa komentarz wielowierszowy w CSS?",
        ["// ...", "/* ... */", "## ... ##", "@@ ... @@"],
        "B", "css", "medium"
    ));

    table.push(new Question(
        "Co oznacza static w Javie?",
        ["Zmienna lokalna", "Należy do klasy, nie do obiektu", "Funkcja prywatna", "Stała"],
        "B", "java", "medium"
    ));

    table.push(new Question(
        "Co robi padding w CSS?",
        ["Margines zewnętrzny", "Odstęp między zawartością a krawędzią elementu", "Kolor tła", "Wyświetla obraz"],
        "B", "css", "medium"
    ));

    table.push(new Question(
        "Jak działa instrukcja switch?",
        ["Tworzy zmienną", "Wybiera ścieżkę kodu zależnie od wartości", "Wyświetla alert", "Kończy program"],
        "B", "programming", "medium"
    ));

// ───────────────────────────────────────────────
// Dodatkowe nowe / zmodyfikowane pytania
// ───────────────────────────────────────────────

    table.push(new Question(
        "Co oznacza const w JavaScript?",
        ["Zmienna, którą można zmieniać", "Stała wartość – nie można zmienić", "Deklaracja funkcji", "Usuwa zmienną"],
        "B", "javascript", "easy"
    ));

    table.push(new Question(
        "Który znacznik HTML służy do tworzenia listy numerowanej?",
        ["<ul>", "<li>", "<ol>", "<dl>"],
        "C", "html", "easy"
    ));

    table.push(new Question(
        "Co robi margin w CSS?",
        ["Wewnętrzny odstęp elementu", "Zewnętrzny odstęp wokół elementu", "Kolor tła", "Grubość obramowania"],
        "B", "css", "easy"
    ));

    table.push(new Question(
        "Który typ pętli wykona się przynajmniej raz?",
        ["for", "while", "do…while", "foreach"],
        "C", "programming", "medium"
    ));

    table.push(new Question(
        "Co oznacza this w metodzie obiektu w JavaScript?",
        ["Odwołanie do globalnego obiektu", "Odwołanie do bieżącego obiektu", "Tworzy nową zmienną", "Zwraca undefined"],
        "B", "javascript", "medium"
    ));

    table.push(new Question(
        "Które słowo kluczowe w Javie zapobiega nadpisywaniu metody w klasie dziedziczącej?",
        ["final", "static", "abstract", "private"],
        "A", "java", "hard"
    ));

    table.push(new Question(
        "Co to jest event bubbling w JavaScript?",
        ["Zdarzenie przemieszcza się od elementu do góry drzewa DOM", "Zdarzenie zatrzymuje się na elemencie", "Zdarzenie idzie od roota do elementu", "Zdarzenie znika natychmiast"],
        "A", "javascript", "hard"
    ));

    table.push(new Question(
        "Co oznacza async/await w JavaScript?",
        ["Sposób pisania kodu synchronicznego dla operacji asynchronicznych", "Tworzy nową zmienną", "Automatycznie kończy funkcję", "Zmienia typ danych"],
        "A", "javascript", "hard"
    ));

    table.push(new Question(
        "Która struktura danych jest najszybsza do wyszukiwania po kluczu (średnio)?",
        ["Tablica", "Lista powiązana", "Drzewo BST", "Hash table / Map"],
        "D", "algorithms", "hard"
    ));

    table.push(new Question(
        "Co to jest hoisting w JavaScript?",
        ["Deklaracje zmiennych i funkcji są przenoszone na górę zakresu", "Automatyczne usuwanie zmiennych", "Zmiana typu danych", "Tworzenie closure"],
        "A", "javascript", "hard"
    ));

    table.push(new Question(
        "Co oznacza słowo kluczowe volatile w Javie / C++?",
        ["Zmienna może być zmieniana przez wiele wątków – bez cache", "Zmienna jest stała", "Zmienna jest prywatna", "Zmienna jest abstrakcyjna"],
        "A", "java", "extreme"
    ));

    table.push(new Question(
        "Co to jest Big O Notation?",
        ["Opisuje zużycie pamięci programu", "Opisuje wzrost czasu działania w stosunku do rozmiaru danych", "Typ bazy danych", "Sposób komentowania kodu"],
        "B", "algorithms", "hard"
    ));

    table.push(new Question(
        "Który protokół jest szyfrowany domyślnie?",
        ["HTTP", "FTP", "HTTPS", "SMTP"],
        "C", "http", "medium"
    ));

    table.push(new Question(
        "Co oznacza CORS w przeglądarce?",
        ["Mechanizm ograniczający żądania między domenami", "Nowy typ pętli", "Sposób zapisu JSON", "Typ błędu 404"],
        "A", "www", "hard"
    ));

    table.push(new Question(
        "Co to jest REST API?",
        ["Architektura oparta na zasobach i metodach HTTP", "Biblioteka JavaScript", "Typ bazy danych", "Sposób stylizacji CSS"],
        "A", "http", "hard"
    ));

    table.push(new Question(
        "Co robi operator ?? (nullish coalescing) w JavaScript?",
        ["Zwraca pierwszą wartość która jest truthy", "Zwraca prawą stronę tylko jeśli lewa jest null lub undefined", "Sprawdza czy obie wartości są równe", "Łączy dwa stringi"],
        "B", "javascript", "medium"
    ));

    table.push(new Question(
        "Który z tych CSS property wymusza sprzętowe przyspieszenie (GPU)?",
        ["transform: translateZ(0)", "opacity: 0.999", "will-change: none", "position: absolute"],
        "A", "css", "medium"
    ));

    table.push(new Question(
        "Co oznacza słowo kluczowe transient w Javie (np. przy serializacji)?",
        ["Pole nie będzie serializowane", "Pole jest tylko tymczasowe w pamięci", "Pole jest dostępne tylko w wątku", "Pole jest finalne"],
        "A", "java", "medium"
    ));

    table.push(new Question(
        "Która metoda HTTP jest idempotentna i bezpieczna jednocześnie?",
        ["POST", "PUT", "DELETE", "GET"],
        "D", "http", "medium"
    ));

    table.push(new Question(
        "Co to jest event loop w JavaScript?",
        ["Mechanizm który czeka na wolne CPU", "Pętla obsługująca callbacki i zadania asynchroniczne", "Kolejka priorytetowa wątków", "Mechanizm garbage collectora"],
        "B", "javascript", "medium"
    ));

    table.push(new Question(
        "Który z tych typów nie jest typem prymitywnym w JavaScript?",
        ["string", "boolean", "object", "symbol"],
        "C", "javascript", "medium"
    ));

    table.push(new Question(
        "Co robi właściwość flex-shrink w CSS Flexbox?",
        ["Określa jak element może się powiększać", "Określa jak element może się zmniejszać względem innych", "Ustawia kolejność elementów", "Włącza zawijanie"],
        "B", "css", "medium"
    ));

    table.push(new Question(
        "Co dokładnie robi Promise.allSettled() w porównaniu do Promise.all()?",
        ["Czeka na wszystkie promisy i zwraca tablicę z {status, value/reason}", "Zwraca pierwszy odrzucony promise", "Zatrzymuje się przy pierwszym błędzie", "Zwraca tylko spełnione promisy"],
        "A", "javascript", "hard"
    ));

    table.push(new Question(
        "W C++ – co oznacza perfect forwarding i do czego służy std::forward?",
        ["Umożliwia przekazywanie lvalue jako lvalue, a rvalue jako rvalue", "Automatycznie konwertuje wszystkie argumenty na const", "Kopiuje obiekt zamiast przenoszenia", "Zmienia ownership na shared_ptr"],
        "A", "cpp", "extreme"
    ));

    table.push(new Question(
        "Który problem rozwiązuje algorytm „Dijkstra z fibonacci heap”? (w porównaniu do zwykłego Dijkstry)",
        ["Znajduje najkrótszą ścieżkę w grafie z ujemnymi wagami", "Znacznie przyspiesza decrease-key operację – O(1) amortyzowane", "Gwarantuje brak cykli negatywnych", "Działa tylko na grafach acyklicznych"],
        "B", "algorithms", "extreme"
    ));

    table.push(new Question(
        "Co to jest ABA problem w programowaniu współbieżnym i jak się go najczęściej unika?",
        ["Sytuacja gdy wartość wraca do starej, ale semantyka się zmieniła – najczęściej rozwiązuje się tagged pointers / version counter", "Deadlock między dwoma wątkami", "Priority inversion", "Starvation wątku o niskim priorytecie"],
        "A", "threads", "extreme"
    ));

    table.push(new Question(
        "W Javie – co dokładnie robi WeakHashMap w porównaniu do zwykłego HashMap?",
        ["Klucze są słabe (weak references) – mogą być usunięte przez GC gdy nie ma do nich silnych referencji", "Wartości są weak references", "Automatycznie usuwa wpisy po 5 minutach", "Jest thread-safe bez synchronizacji"],
        "A", "java", "hard"
    ));

    table.push(new Question(
        "Co oznacza flaga SameSite=Strict w ciasteczkach i kiedy jest najbardziej bezpieczna?",
        ["Ciasteczko jest wysyłane tylko w żądaniach pochodzących z tej samej witryny (nawet przy kliknięciu linku z innej strony nie jest wysyłane)", "Ciasteczko jest zawsze wysyłane", "Ciasteczko jest wysyłane tylko przy POST", "Ciasteczko jest blokowane przez przeglądarkę"],
        "A", "security", "hard"
    ));

    table.push(new Question(
        "W jakim przypadku klasa musi mieć wirtualny destruktor w C++?",
        ["Zawsze gdy klasa jest używana jako klasa bazowa przez wskaźnik/ referencję i może być usuwana przez delete na klasie pochodnej", "Gdy klasa zawiera pola virtual", "Gdy używamy multiple inheritance", "Gdy klasa jest abstrakcyjna"],
        "A", "cpp", "extreme"
    ));

    table.push(new Question(
        "Co to jest Temporal Dead Zone (TDZ) w JavaScript?",
        ["Okres między początkiem zakresu a momentem deklaracji let/const – odwołanie powoduje ReferenceError", "Czas gdy promise jest pending", "Okres gdy zmienna var jest hoisted ale undefined", "Czas życia closure"],
        "A", "javascript", "hard"
    ));
}