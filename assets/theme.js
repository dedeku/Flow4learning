var links = document.links;
for (let i = 0, linksLength = links.length ; i < linksLength ; i++) {
  if (links[i].hostname !== window.location.hostname) {
    links[i].target = '_blank';
    links[i].rel = 'noreferrer noopener';
  }
}


        $(document).ready(function () {
            var counter = 0;
            var c = 0;
            var i = setInterval(function () {
                $(".multicolumn-card__info h3 span").html(c + "");
                counter++;
                c++;

                if (counter == 3172) {
                    clearInterval(i);
                }
            }, 2);
        });
