for k,v in D.items():
  v['prereq-for'] = []

for k,v in D.items():
  if v['prereqs_obj']:
    for j in v['prereqs_obj']:
      if j in D:
        D[j]['prereq-for'].append(k)