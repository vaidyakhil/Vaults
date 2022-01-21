const renderItem = ({ item }: { item: LayoutElement, index: number }) => {
    const itemComponentProps = dataStore[item.id];
    const ItemComponent = PropsComponentMap[item.type]
    return (
        <ItemComponent {...itemComponentProps} />
    )
}