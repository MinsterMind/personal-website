var oss = [
{
"url": "https://github.com/dharmafly/noodle",
"name": "dharmafly/noodle",
"stars": 707,
"forks": 71,
"prs": [
{
"url": "https://github.com/dharmafly/noodle/pull/122",
"title": "added request parameter to the result of noodle.. same as headers.. b…",
"state": "open"
}
]
},
{
"url": "https://github.com/Codigami/tech-crowdfire",
"name": "Codigami/tech-crowdfire",
"stars": 3,
"forks": 6,
"prs": [
{
"url": "https://github.com/Codigami/tech-crowdfire/pull/6",
"title": "let usage added",
"state": "merged"
}
]
}
];


var html = oss.map(function(repo) {
  return (
    '<li class="repos__item">' +
        '<div class="repos__item__header">' +
          '<a class="repos__item__name" href="' + repo.url + '" target="_blank" rel="noopener nofollow">' +
            repo.name +
          '</a>' +
          '<div>' +
            '<span class="repos__item__stat">' +
              '<i class="icon-star"></i>' +
              repo.stars +
            '</span>' +
            '<span class="repos__item__stat">' +
              '<i class="icon-fork"></i>' +
              repo.forks +
            '</span>' +
          '</div>' +
        '</div>' +
        '<span class="repos__item__body">Pull Requests:</span>' +
        '<ul class="repos__item__list">' +
          repo.prs.map(function(pr) {
            return (
              '<li class="repos__item__list__item">' +
                '- <a href="' + pr.url + '" target="_blank" rel="noopener nofollow">' +
                  pr.title +
                '</a>' +
                '&nbsp;[' + pr.state + ']' +
              '</li>'
            );
          }).join('') +
        '</ul>' +
    '</li>'
  );
});

$('.js-repos-list').html(html.join(''));
