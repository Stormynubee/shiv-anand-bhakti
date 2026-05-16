f = open('src/components/ui/GuidedTour.jsx', encoding='utf-8')
c = f.read()
f.close()
bad = "He\u2019ll respond"
good = "He will respond"
# Also try plain apostrophe
bad2 = "He'll respond"
c = c.replace(bad, good).replace(bad2, good)
f2 = open('src/components/ui/GuidedTour.jsx', 'w', encoding='utf-8')
f2.write(c)
f2.close()
print("Done - fixed apostrophe")
