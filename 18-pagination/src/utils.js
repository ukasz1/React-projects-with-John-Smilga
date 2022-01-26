const paginate = (followers) => {
    const itemsPerPage = 9;
    const pages = Math.ceil(followers.length / itemsPerPage); //ile stron

    const newFollowers = Array.from({ length: 10 }, (_, index) => { //tworzenie tablicy tablic profili, żeby ich itemy wyświetlać pojedynczo
        const start = index * itemsPerPage;
        console.log(start);
        return followers.slice(start, start + itemsPerPage);
    });

    return newFollowers;
}

export default paginate
