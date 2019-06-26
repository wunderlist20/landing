class FilterLink {
  constructor(filterElement){
    this.filterElement = filterElement;
    this.filterData = this.filterElement.dataset.tab;
    console.log(this.filterElement.dataset.tab);

    if(this.filterData === 'all'){
      this.headshots = document.querySelectorAll('.headshot');
    } else {
      this.headshots = document.querySelectorAll(`.headshot[data-tab='${this.filterData}']`);
    };

    this.headshots = Array.from(this.headshots).map(headshot => new FilterHeadshot(headshot));

    this.filterElement.addEventListener('click', () => this.selectFilter());
  }

  selectFilter(){
    const filters = document.querySelectorAll('.filter');

    filters.forEach( (filter) => filter.classList.remove('active-filter'));

    const headshots = document.querySelectorAll('.headshot');

    headshots.forEach( (headshot) => headshot.style.display = 'none');

    this.filterElement.classList.add('active-tab');

    this.headshots.forEach(headshot => headshot.selectHeadshot());

  }
}


class FilterHeadshot {
  constructor(headshotElement){
    this.headshotElement = headshotElement;
  }

  selectHeadshot(){
    this.headshotElement.style.display = 'flex';
  }
}


let filters = document.querySelectorAll('.filter').forEach(filters => new FilterLink(filters));
