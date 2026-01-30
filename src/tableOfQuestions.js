import {Question} from "./Question";

export const table = [];

table.push(new Question(
    "Do czego służy instrukcja if w programowaniu?",
    ["Tworzy pętlę", "Sprawdza warunek i wykonuje kod", "Deklaruje zmienną", "Wyświetla komunikat"],
    "B", "programowanie", "easy"
));

table.push(new Question(
    "Jakiego typu danych używa się do przechowywania liczb całkowitych w Javie?",
    ["double", "char", "int", "String"],
    "C", "java", "easy"
));

table.push(new Question(
    "Co robi znacznik < p > w HTML?",
    ["Tworzy akapit", "Wstawia obraz", "Definiuje nagłówek", "Zmienia kolor"],
    "A", "html", "easy"
));

table.push(new Question(
    "Czym różni się HTML od CSS?",
    ["HTML styluje, CSS struktury", "HTML to baza danych", "HTML struktura, CSS wygląd", "HTML i CSS to to samo"],
    "C", "html", "easy"
));

table.push(new Question(
    "Co oznacza console.log w JavaScript?",
    ["Tworzy zmienną", "Wyświetla w konsoli", "Zmienia kolor tła", "Tworzy funkcję"],
    "B", "javascript", "easy"
));

table.push(new Question(
    "Do czego służy pętla while?",
    ["Powtarza kod dopóki warunek jest prawdziwy", "Deklaruje funkcję", "Wyświetla komunikat", "Kończy program"],
    "A", "programowanie", "easy"
));

table.push(new Question(
    "Co to jest zmienna?",
    ["Stała wartość", "Miejsce w pamięci na dane", "Typ danych", "Funkcja"],
    "B", "programowanie", "easy"
));

table.push(new Question(
    "Jakiego operatora używamy do dodawania liczb w JavaScript?",
    ["*", "-", "+", "%"],
    "C", "javascript", "easy"
));

table.push(new Question(
    `Co robi < img > w HTML?`,
    ["Wstawia akapit", "Wstawia obraz", "Tworzy link", "Ustawia tło"],
    "B", "html", "easy"
));

table.push(new Question(
    "Do czego służy atrybut href w < a >?",
    ["Kolor linku", "Adres, pod który prowadzi link", "Wyświetla alert", "Tworzy obraz"],
    "B", "html", "easy"
));

table.push(new Question(
    "Jakiego znaku używa się do komentarza w Javie?",
    ["// lub /*...*/", "%%", "@@", "##"],
    "A", "java", "easy"
));

table.push(new Question(
    "Czym jest funkcja w programowaniu?",
    ["Blok kodu wywoływany wielokrotnie", "Stała wartość", "Zmienna globalna", "Komentarz"],
    "A", "programowanie", "easy"
));

table.push(new Question(
    "Co robi return w funkcji?",
    ["Zwraca wartość z funkcji", "Tworzy funkcję", "Kończy pętlę", "Inicjalizuje zmienną"],
    "A", "programowanie", "easy"
));

table.push(new Question(
    "Do czego służy background-color w CSS?",
    ["Kolor tekstu", "Kolor tła elementu", "Wyświetla obraz", "Tworzy link"],
    "B", "css", "easy"
));

table.push(new Question(
    "Jakiego znaku używa się do kończenia instrukcji w Java i C++?",
    [".", ";", ":", ","],
    "B", "programowanie", "easy"
));

table.push(new Question(
    "Co oznacza słowo kluczowe public w Javie?",
    ["Dostęp tylko w klasie", "Dostęp wszędzie", "Prywatny dostęp", "Zmienna globalna"],
    "B", "java", "easy"
));

table.push(new Question(
    "Co to jest strona internetowa?",
    ["Dokument HTML w przeglądarce", "Program w Pythonie", "Obrazek", "Baza danych"],
    "A", "www", "easy"
));

table.push(new Question(
    "Jakiego znaku używa się do definiowania selektora ID w CSS?",
    [".nazwa", "#nazwa", "*nazwa", "@nazwa"],
    "B", "css", "easy"
));

table.push(new Question(
    "Czym różni się element blokowy od liniowego w HTML?",
    ["Blokowy zajmuje całą szerokość, liniowy tylko potrzebną", "Liniowy zajmuje całą stronę", "Blokowy to obraz", "Liniowy nie istnieje"],
    "A", "html", "easy"
));

table.push(new Question(
    "Co robi alert w JavaScript?",
    ["Tworzy zmienną", "Wyświetla okienko z komunikatem", "Tworzy funkcję", "Usuwa element"],
    "B", "javascript", "easy"
));

table.push(new Question(
    "Czym różni się == od === w JavaScript?",
    ["== porównuje wartość, === typ i wartość", "== tworzy funkcję", "=== zmienia zmienną", "== wyświetla alert"],
    "A", "javascript", "medium"
));

table.push(new Question(
    "Jak działa pętla for?",
    ["Powtarza kod z inicjalizacją, warunkiem i iteracją", "Kończy program", "Tworzy zmienną", "Wyświetla okienko"],
    "A", "programowanie", "medium"
));

table.push(new Question(
    "Co to jest tablica w Java/C++?",
    ["Lista elementów tego samego typu", "Funkcja", "Zmienna globalna", "Stała"],
    "A", "programowanie", "medium"
));

table.push(new Question(
    "Do czego służy metoda main w Javie?",
    ["Główna metoda startowa programu", "Zmienna globalna", "Wyświetla alert", "Tworzy HTML"],
    "A", "java", "medium"
));

table.push(new Question(
    "Jakie są podstawowe selektory w CSS?",
    [".class, #id, element", "@id, *element", "html(), body()", "function()"],
    "A", "css", "medium"
));

table.push(new Question(
    "Co to jest funkcja anonimowa w JavaScript?",
    ["Funkcja bez nazwy", "Funkcja globalna", "Zmienna lokalna", "Stała"],
    "A", "javascript", "medium"
));

table.push(new Question(
    "Jak działa dziedziczenie w Javie?",
    ["Klasa przejmuje właściwości i metody innej klasy", "Tworzy zmienną", "Wyświetla alert", "Kończy program"],
    "A", "java", "medium"
));

table.push(new Question(
    "Czym różni się id od class w HTML/CSS?",
    ["id jest unikalne, class może się powtarzać", "class jest unikalne", "id może się powtarzać", "Nie ma różnicy"],
    "A", "html", "medium"
));

table.push(new Question(
    "Co to jest operator modulo %?",
    ["Reszta z dzielenia", "Mnożenie", "Dzielenie", "Dodawanie"],
    "A", "programowanie", "medium"
));

table.push(new Question(
    "Jaką rolę pełni let w JavaScript?",
    ["Deklaruje zmienną z zasięgiem blokowym", "Stała wartość", "Funkcja", "Usuwa zmienną"],
    "A", "javascript", "medium"
));

table.push(new Question(
    "Co robi float w C++?",
    ["Typ liczby zmiennoprzecinkowej", "Liczba całkowita", "Zmienna tekstowa", "Operator"],
    "A", "cpp", "medium"
));

table.push(new Question(
    "Co to jest div w HTML?",
    ["Element blokowy grupujący treść", "Nagłówek", "Link", "Obraz"],
    "A", "html", "medium"
));

table.push(new Question(
    "Jak działa komentarz wielowierszowy w CSS?",
    ["/* ... */", "// ...", "## ... ##", "@@ ... @@"],
    "A", "css", "medium"
));

table.push(new Question(
    "Co oznacza static w Javie?",
    ["Należy do klasy, nie obiektu", "Zmienna lokalna", "Funkcja prywatna", "Stała"],
    "A", "java", "medium"
));

table.push(new Question(
    "Co robi padding w CSS?",
    ["Odstęp między zawartością a krawędzią elementu", "Margines zewnętrzny", "Kolor tła", "Wyświetla obraz"],
    "A", "css", "medium"
));

table.push(new Question(
    "Jak działa instrukcja switch?",
    ["Wybiera ścieżkę kodu zależnie od wartości", "Tworzy zmienną", "Kończy program", "Wyświetla alert"],
    "A", "programowanie", "medium"
));

table.push(new Question(
    "Czym jest parametr funkcji?",
    ["Wartość przekazywana do funkcji", "Funkcja anonimowa", "Zmienna globalna", "Typ danych"],
    "A", "programowanie", "medium"
));

table.push(new Question(
    "Co oznacza termin bug?",
    ["Błąd w programie", "Funkcja", "Komentarz", "Zmienna"],
    "A", "programowanie", "medium"
));

table.push(new Question(
    "Jak działa href=\"#\" w HTML?",
    ["Link placeholder – nie prowadzi nigdzie", "Tworzy obraz", "Wyświetla alert", "Kończy program"],
    "A", "html", "medium"
));

table.push(new Question(
    "Co to jest JSON?",
    ["Format wymiany danych", "Zmienna JS", "Funkcja anonimowa", "Typ liczby"],
    "A", "programowanie", "medium"
));

table.push(new Question(
    "Co to jest polimorfizm?",
    ["Różne użycie tej samej metody w różnych klasach", "Tworzenie zmiennych", "Zmiana koloru", "Funkcja globalna"],
    "A", "oop", "hard"
));

table.push(new Question(
    "Czym różni się kompilacja od interpretacji?",
    ["Kompilacja tłumaczy cały kod, interpretacja linia po linii", "Kompilacja wyświetla alert", "Interpretacja tworzy zmienną", "To to samo"],
    "A", "programowanie", "hard"
));

table.push(new Question(
    "Co to jest scope w JavaScript?",
    ["Zakres widoczności zmiennej", "Typ zmiennej", "Operator", "Funkcja"],
    "A", "javascript", "hard"
));

table.push(new Question(
    "Co to jest closure?",
    ["Funkcja pamiętająca zmienne z zewnętrznego zakresu", "Zmienna globalna", "Typ liczby", "Alert"],
    "A", "javascript", "hard"
));

table.push(new Question(
    "Jak działa garbage collector w Javie?",
    ["Automatycznie zwalnia nieużywaną pamięć", "Tworzy zmienne", "Wyświetla alert", "Kończy program"],
    "A", "java", "hard"
));

table.push(new Question(
    "Co to jest pointer w C++?",
    ["Zmienna przechowująca adres innej zmiennej", "Liczba", "Tekst", "Funkcja"],
    "A", "cpp", "hard"
));

table.push(new Question(
    "Array vs LinkedList",
    ["Array szybki dostęp, LinkedList szybkie dodawanie/usuwanie", "Array to funkcja", "LinkedList to liczba", "To samo"],
    "A", "programowanie", "hard"
));

table.push(new Question(
    "Co to jest rekurencja?",
    ["Funkcja wywołująca samą siebie", "Zmienna", "Stała", "Operator"],
    "A", "programowanie", "hard"
));

table.push(new Question(
    "Czym jest metoda abstrakcyjna w Javie?",
    ["Metoda bez implementacji", "Funkcja globalna", "Zmienna", "Typ danych"],
    "A", "java", "hard"
));

table.push(new Question(
    "Co oznacza immutable w JavaScript?",
    ["Niezmienny obiekt", "Funkcja", "Zmienna lokalna", "Typ liczby"],
    "A", "javascript", "hard"
));

table.push(new Question(
    "Co to jest DOM?",
    ["Struktura strony w przeglądarce", "Funkcja", "Zmienna", "Operator"],
    "A", "www", "hard"
));

table.push(new Question(
    "inline vs inline-block",
    ["Inline nie ma wymiarów, inline-block ma", "Inline usuwa element", "Inline koloruje tekst", "Inline tworzy link"],
    "A", "css", "hard"
));

table.push(new Question(
    "Co to jest AJAX?",
    ["Asynchroniczne żądania do serwera", "Zmienna", "Funkcja", "Typ liczby"],
    "A", "javascript", "hard"
));

table.push(new Question(
    "Jak działa prototyp w JavaScript?",
    ["Obiekt, z którego dziedziczą inne obiekty", "Funkcja anonimowa", "Typ liczby", "Zmienna"],
    "A", "javascript", "hard"
));

table.push(new Question(
    "Co to jest multithreading?",
    ["Wiele wątków równolegle", "Jedna funkcja", "Zmienna", "Operator"],
    "A", "programowanie", "hard"
));

table.push(new Question(
    "Co robi operator new?",
    ["Tworzy nowy obiekt", "Tworzy zmienną", "Wyświetla alert", "Kończy program"],
    "A", "programowanie", "hard"
));

table.push(new Question(
    "Co to jest SQL Injection?",
    ["Wstrzykiwanie kodu SQL", "Funkcja JS", "Zmienna", "Typ liczby"],
    "A", "security", "hard"
));

table.push(new Question(
    "GET vs POST",
    ["GET w URL, POST w ciele żądania", "GET tworzy funkcję", "POST koloruje tekst", "To samo"],
    "A", "http", "hard"
));

table.push(new Question(
    "Co to jest framework? (JS)",
    ["Zestaw narzędzi np. React", "Funkcja", "Zmienna", "Typ"],
    "A", "javascript", "hard"
));

table.push(new Question(
    "Co oznacza O(n²)?",
    ["Złożoność rośnie kwadratowo", "Funkcja globalna", "Zmienna", "Operator"],
    "A", "algorytmy", "hard"
));

table.push(new Question(
    "Stack vs Heap",
    ["Stack – zmienne lokalne, Heap – obiekty dynamiczne", "Heap – zmienne lokalne", "Stack – obiekty dynamiczne", "To samo"],
    "A", "memory", "extreme"
));

table.push(new Question(
    "Race condition",
    ["Konflikt wątków na współdzielonych danych", "Pętla while", "Funkcja", "Typ liczby"],
    "A", "threads", "extreme"
));

table.push(new Question(
    "Dziedziczenie wielokrotne w C++",
    ["Klasa dziedziczy po wielu klasach, problem rozwiązuje virtual", "Tworzy zmienną", "Alert", "Kończy program"],
    "A", "cpp", "extreme"
));

table.push(new Question(
    "Model klient–serwer",
    ["Klient (JS/HTML) wysyła żądania, serwer (PHP) odpowiada", "Wszystko w JS", "Tylko HTML", "Tylko PHP"],
    "A", "www", "extreme"
));

table.push(new Question(
    "QuickSort – złożoność",
    ["Najlepszy/średni O(n log n), najgorszy O(n²)", "Zawsze O(n²)", "O(1)", "O(n³)"],
    "A", "algorytmy", "extreme"
));