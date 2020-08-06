const SccConvertor = {
  sccType: {
    head:       'scc-page-head',
    headDesc:   'scc-page-head-desc',
    h3:         'scc-h3',
    h3Green:    'scc-h3-green',
    h3Red:      'scc-h3-red',
    h3Blue:     'scc-h3-blue',
    h3Purple:   'scc-h3-purple',
    p:          'scc-p',
    widget:     'scc-widget',
    widgetTitle:'scc-widget-title',
    widgetBody: 'scc-widget-body',
  },
  render(str) {
    let htmlStr = '';
    htmlStr = this.convert(str);
    return htmlStr;
  },
  convert(str, type) {
    let s = str;

    s = this.setPageHTML(s, this.sccType.head);
    s = this.setPageHTML(s, this.sccType.headDesc);
    s = this.setPageHTML(s, this.sccType.h3);
    s = this.setPageHTML(s, this.sccType.h3Green);
    s = this.setPageHTML(s, this.sccType.p);
    s = this.setPageHTML(s, this.sccType.widget);
    s = this.setPageHTML(s, this.sccType.widgetTitle);
    s = this.setPageHTML(s, this.sccType.widgetBody);

    return s;
  },
  selectTag(type) {
    let front = '';
    let end = '';
    if (type === this.sccType.head) {
      front = '<div class="page-header"><h1>';
      end = '</h1></div>';
    } else if (type === this.sccType.headDesc) {
      front = '<small><i class="ace-icon fa fa-angle-double-right"></i>';
      end = '</small>';
    } else if (type === this.sccType.h3) {
      front = '<h3 class="header smaller lighter">';
      end = '</h3>';
    } else if (type === this.sccType.h3Green) {
      front = '<h3 class="header smaller lighter green">';
      end = '</h3>';
    } else if (type === this.sccType.p) {
      front = '<p>';
      end = '</p>';
    } else if (type === this.sccType.widget) {
      front = '<div class="widget-box">';
      end = '</div>';
    } else if (type === this.sccType.widgetTitle) {
      front = '<div class="widget-header widget-header-flat"><h4 class="smaller">';
      end = '</h4></div>';
    } else if (type === this.sccType.widgetBody) {
      front = '<div class="widget-body"><div class="widget-main"><div class="row"><div class="col-sm-12">';
      end = '</div></div></div></div>';
    }

    return {front, end};
  },
  setPageHTML(text, type) {
    const tagObj = this.selectTag(type);

    const re = new RegExp('\{\{(\s*' + type + ')\s*\}\}', 'g');
    const re2 = new RegExp('\{\{(\/?)(\s*' + type + ')\s*\}\}', 'g');

    let front = text.match(re);
    if (Array.isArray(front)) {
      front.forEach((item, index) => {
        text = text.replace(front[index], tagObj.front);
      });
    }
    let end = text.match(re2);
    if (Array.isArray(end)) {
      end.forEach((item, index) => {
        text = text.replace(end[index], tagObj.end);
      });
    }
    return text;
  },
};

export default SccConvertor;