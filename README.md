# Scope/Leírás
## Cinema
Egy olyan program, mely egy mozi jegyeladásait kezeli. Egy regisztrált felhasználónak lehetősége van egy általa választott filmre
jegyet venni. A rendeléseket egy ügyintéző/admin igazolja.

## Funkcionális követelményjegyzék
- Guest
  - Adatok lekérdezése
  - Regisztrálás
- User
  - Adatok lekérdezése
  - Saját adatainak módosítása
  - Jegyfoglalás
- Admin
  - Filmek felvétele/törlése/módosítása
  - Termek felvétele/törlése/módosítása
  - Jegyfoglalás visszaigazolása
  
| Követelmény | Leírás |
| ------ | ------ |
|ST1| Az oldalon található lesz egy menüsor. Melyen az alapfunkciók lesznek elérhetők. |
|ST2| Az oldal törzsében a kínálatban szereplő filmek fognak szerepelni. |
|GST1| A vendég felhasználó a menüsorból a megfelelő elemet kiválasztva bejelentkezhet/regisztrálhat |
|GST2| A vendég felhasználó megtudja tekinteni a kínálatban szereplő filmek adatait |
|USR1| A bejelentkezett felhasználó továbbra is látja a kínálatban szereplő filmek adatait |
|USR2| A bejelentkezett felhasználó képes egy adott filmre jegyrendelést leadni |
|USR3| A bejelentkezett felhasznéló képes a nevét címét, módosítani|
|USR4| A bejelentkezett felhasználó megtekintheti a leadott foglalásait |
|ADM1| Az admin felhasználó képes a filmeken alapvető adatbázis műveletek végrehajtani (felvétel/törlés/módosítás) |
|ADM2| Az admin felhasználó képes a termeken alapvető adatbázis műveletek végrehajtani (felvétel/törlés/módosítás) |
|ADM3| Az admin felhasználó visszaigazolja a leadott rendeléseket |

## Nem funkcionális követelmények
A felhasználó egy böngésző segítségével tudja használni a program funkcióit (pl. Firefox, Chrome...stb.). A szervergépen elérhető java futtató környezet 8-as verziójú. Sebesség és teljesítménybeli elvárások nincsenek, maximális erőforrásigény nincs meghatározva. Felhasználók adataira vonatkozó biztonsági megkötések nincsenek.

## Adatbázis terv

![Adatbázis terv](images/terv.png?raw=true "Adatbázis terv")

## Use-Case diagram

![UseCaseDiagram](images/UseCaseDiagram.png?raw=true "UseCaseDiagram")
