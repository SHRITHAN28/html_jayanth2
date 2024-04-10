function updateProgressBar(){
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    document.querySelector('.abc').style.setProperty('--progress', scrollPercent);
  }
  
  document.addEventListener('scroll', updateProgressBar);