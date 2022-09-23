export function AllJobs() {
    const url = 'https://alumni-association.herokuapp.com/jobs';
    var a;
    fetch(url)
        .then(res => res.json())
        .then(data => a = data)
    console.log(a);
    return a;
}

export function AllAlumnus() {
    var b;
    const url = 'https://alumni-association.herokuapp.com/alumnus';
    fetch(url)
        .then(res => res.json())
        .then(data => b = data)
    return b;
}

