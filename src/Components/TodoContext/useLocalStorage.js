import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    
    React.useEffect(()=>{
        setTimeout(()=>{
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let itemParse;
                if (!localStorageItem) {
                    itemParse = initialValue;
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                } else {
                    itemParse = JSON.parse(localStorageItem);
                    setItem(itemParse);     
                }
                setLoading(false);
            }catch(error){
                setError(true);
                setLoading(false);
            }
        }, 3000)
    }, [])
    
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item, 
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };



// const defaultTodos = [
//   { text: "Barrer la sala de mi casa.", completed: false },
//   { text: "Lavar los zapatos deportivos.", completed: true },
//   { text: "Arreglar mi closet.", completed: true },
//   { text: "Lavar la loza.", completed: false },
//   { text: "Terminar el curso de React.", completed: false },
//   { text: "Estudiar ingles.", completed: false }
// ];
