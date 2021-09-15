import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegexService {

  constructor() { }

  public tagReplacer(text:string,tags:string[]):string{
    var regexFilter = new RegExp('^{[\w]*[\d]*_*}$');
    var regex = new RegExp('\d')
    var replaceText = text;
    tags.filter(tag=>regexFilter.test(tag)).forEach(tag => {
     replaceText= replaceText.replace(regex,tag);
  });
 
  return replaceText;
  }
}
