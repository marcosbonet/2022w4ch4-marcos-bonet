## CONCEPTOS

Componente layout -> Componente que engloba a varios componentes.

Error Manifest - en manifesr.json si movemos logos tenemos que editar el documento.

## USO DE CHILDREN

El children no sabe que es children, se lo decimos luego en el Layout en el que recogemos el children y lo metemos donde queramos.

```javascript
export function App() {
    return (
        <Layout>
            <div className="app">Probando</div>
        </Layout>
    );
}
```

Si nos vamos al componente layout

Cuando usemos el layout podemos usar un elemento entre medias del header y el footer
Recogemos el children que esta entre las etiquetas de apertura y cierre y lousamos donde queramos entre corchetes. {children}

```javascript
export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
```

## ENRUTADO.

La idea de las rutas es que para poder usarlas necesitamos un proveedor de rutas, ese proveedor lo puedo colocar a distintos niveles, es un enboltorio.

La idea de grapper es algo que se abre y cierra y envuelve algo.

```
    npm i react-router-dom
```

routes - Componente de react que se va a encargar de las rutas, de cargar la pagina 1... 2...

Lo importante de Routes es enbolver a lo grande. Una vez que envlvemos algo en el router ya podemos enrutar mas.

Si queremos poder navegar tras las diferentes paginas, necesitamos componentes por cada una de las paginas con sus componentes de estructura.

Estos 4 componentes puedes guardarlos en la carpetas pages.. Tienen que exportar por default.

```javascript
function HomePage() {
    return <h2>Home Page</h2>;
}

//Para exportar default, todas las paginas tienen que exportar default
export default HomePage;
```

**ROUTER GLOBAL** - Router es el mas grande y embuelve a todos, lo llamamos Router en vez de browserRouter,
**routes** - Engloba las rutas
**Route** - La ruta como tal.

```javascript
import { Navigate, Routes, Route } from 'react-router-dom';
import HomePage from '../../../feature/home/components/page/home.page';
import TodoPage from '../../../feature/todo/components/pages/todo';
export function AppRoutes() {
    //Routes definen  las rutas y podemos poner dentro tantas como queramos
    return (
        <Routes>
            {/* path es la parte que quieres que te llegue, element es donde te dirige, path es lo que en el link de la pagina pones en el / */}
            <Route path="home" element={<HomePage></HomePage>}></Route>
            <Route path="todo" element={<TodoPage></TodoPage>}></Route>
            <Route path="" element={<HomePage></HomePage>}></Route>
            {/* Le pongas lo que le pongas lo va a dejar como ruta vacia y te lleva a la anterior */}
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
```

## IMPORTACIONES GLOBALES Y RELATIVOS

-   Globales Son globales a la applicacion, react...
-   Relativos son los que son propios de la app ficheros..

## TESTING DE COMPONENTES

Testeamos con testing library, render, screen, matchers..

Renderizamos siempre el componente que quereamos testear, Si este esta enrutado tb tenemos que enrutarlo.

Hacemos test con mentalidad de usuario, no hacemos test con implementaciones.
