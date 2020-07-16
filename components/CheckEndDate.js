function List({ list }) {
  const isNotAvailable = !list;
  const isEmpty = !list.length;
 
  return (
    <div>
      {isNotAvailable
        ? <p>Sorry, the list is not there.</p>
        : (isEmpty
          ? <p>Sorry, the list is empty.</p>
          : <div>{list.map(item => <Item item={item} />)}</div>
        )
      }
    </div>
  );
}