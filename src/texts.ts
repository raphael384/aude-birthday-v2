export default [
  {
    text: "Le réveil sonne ce matin. Pour une fois, tu n'a pas trop la flemme de te lever puisque l’année scolaire se termine bientôt, et c’est donc d’un pas décidé que tu descends les escaliers pour prendre ton petit déjeuner. Ta mère semble déjà levée depuis pas mal de temps alors tu lui demandes:\n\n-Alors, tu as des nouvelles ?\n\n-Ahh, arrête de me poser cette question ! Non, on ne sait toujours rien de l’ambulance qui a emmené tes camarades après leur intoxication lors de la sortie.\n\nTu soupires en songeant à Louis, Raphaël, Marius et Philbert. Pourquoi personne n’ose croire à un enlèvement ? Tu t'assois et tu commences à manger, quand tu remarques un journal posé sur le bord de la table.\n\n-Le Ouest-France d’aujourd’hui ? demandes-tu. Je croyais qu’on était pas abonnés ?\n\n-Oui, c’est une erreur, te répond ta mère. Le facteur aurait dû le livrer à l’immeuble d’en face. Tu voudras bien aller le donner après ton petit-déjeuner ?",
    buttons: [
      {
        text: "Oui bien sûr",
        target: 1,
      },
      {
        text: "Flemme...",
        target: 11,
      },
    ],
  },
  {
    text: "Tu décides donc de descendre de ton immeuble et tu te rends en face. Si le facteur s’est trompé, le bon destinataire du journal doit habiter au même numéro que toi… Donc au troisième étage. Tu pénètres dans l'ascenseur en même temps qu’une vieille dame au grand chignon\n\n-Vous montez ? demandes-tu poliment.\n\nElle acquiesce avec un regard sympathique, puis les portes se referment et la cage monte lentement.",
    buttons: [
      {
        text: "Tu fais la conversation",
        target: 2,
      },
      {
        text: "Tu regardes le journal",
        target: 3,
      },
    ],
  },
  {
    text: "-Vous connaissez la personne qui habite au troisième ? oses-tu.\n\n-Oui, c’est un homme un peu bizarre, toujours très occupé, même la nuit… Voyez-vous quand on est concierge comme moi, c’est plutôt perturbant… Y’ en a qui disent que je suis une commère, mais… Oh! mais c’est lui ! Sur le journal !\n\nLa concierge avait dit ces mots avec un grand trouble. Elle avait indiqué l’article de la dernière page au dos, où l’on pouvait lire sur le titre:\n\nToujours aucune nouvelle de John Henry, ancien ingénieur franco-américain.\n\nSur la photographie on peut voir un grand homme avec une légère barbe posant à côté d’une grande plaque bleue. La légende dit:\n\nLe brillant concepteur s’était notamment illustré par la conception du nainium, l’un des alliages les plus solides connus à ce jour. Ici sur une photo de 1995.\n\nCela paraît invraisemblable. Tu voudrais interroger la dame, mais pendant que tu lisais, l’ascenseur s’est arrêté et elle est partie en tremblant.",
    buttons: [
      {
        text: "Tu arrives devant l'appartement",
        target: 4,
      },
    ],
  },
  {
    text: "Voici le gros titre lisible au dos:\n\nToujours aucune nouvelle de John Henry, ancien ingénieur franco-américain.\n\nSur la photographie on peut voir un grand homme avec une légère barbe posant à côté d’une grande plaque bleue. La légende dit:\n\nLe brillant concepteur s’était notamment illustré par la conception du nainium, l’un des alliages les plus solides connus à ce jour. Ici sur une photo de 1995.\n\nPendant que tu lis, la dame regarde elle aussi l’article et a paru soudain très troublée. Étrange.",
    buttons: [
      {
        text: "Tu arrives devant l'appartement",
        target: 4,
      },
    ],
  },
  {
    text: "Tu toques à la porte. Une voix grommelante te répond:\n\n-C’est pour quoi?\n\n-Euh, j’habite en face et je crois que le facteur s’est trompé en livrant votre journal, monsieur.\n\n-Je suis occupé, posez ça dans l’entrée.\n\nTu ouvres la porte qui révèle un couloir qui mène à un salon. Juste à côté de toi se trouve une petite étagère sur laquelle tu déposes le journal. Promenant ton regard le long du couloir, tu te rends compte que sur le mur du salon est recouvert de photographies, de coupures de journaux, de documents en tous genres. Surprise, tu détournes ton regard. Après tout, ce ne sont pas tes affaires. Trop tard, tu te rends compte que plusieurs des photos sont celles de quelqu’un que tu connais fort bien: raphaël l’un des disparus de ta classe. La curiosité est trop forte, tu oses t’approcher quand le propriétaire apparaît. Stupeur, c’est bel et bien l’homme de l’article. Il te barre le passage en disant:\n\n-Il y a un problème, jeune fille ?",
    buttons: [
      {
        text: "Mais, vous êtes John Henry!",
        target: 5,
      },
      {
        text: "Tu préfères te taire",
        target: 6,
      },
    ],
  },
  {
    text: "-Mais, vous êtes John Henry !\n\n-Et toi, une gamine qui ne se mêle pas de ses affaires…\n\nSans aucun scrupule, l’homme t'assomme.\n\nÉchec. Tu peux recommencer l’aventure.",
    buttons: [
      {
        text: "RECOMMENCER",
        target: 0,
      },
    ],
  },
  {
    text: "Tu préfères te taire pour ne pas éveiller des soupçons. Et si c’était lui qui avait kidnappé tes camarades? Cette idée te terrifie, mais tu dois enquêter. L’homme est sur le point de te congédier avec rudesse quand tu remarques une pochette de documents à côté de toi. Elle semble si accessible que…",
    buttons: [
      {
        text: "Tu fais diversion pour la récupérer.",
        target: 7,
      },
      {
        text: "Tu préfères attendre un peu.",
        target: 8,
      },
    ],
  },
  {
    text: "Tu sors alors ton meilleur jeu d’actrice et fais mine de déraper sur le parquet en sortant. En te relevant tu glisses la pochette sous ton manteau. Tu savoures déjà ta victoire en passant la porte quand une main se pose sur ton épaule.\n\n-Je crois que vous feriez mieux de ne pas toucher à ça.\n\n\nTu es grillée. Recommence l’aventure.",
    buttons: [
      {
        text: "RECOMMENCER",
        target: 0,
      },
    ],
  },
  {
    text: "Non, tu risques d’être vue si tu essaies maintenant. Tu ne sais en réalité pas trop quoi faire quand le téléphone sonne soudain. L’homme grogne et retourne dans son salon en laissant:\n\n-Merci, ne touchez à rien.\n\nIl s’est enfin éloigné ! Serait-ce l'occasion idéale ?",
    buttons: [
      {
        text: "Tu prends les documents et tu t'enfuies",
        target: 9,
      },
      {
        text: "Tu préfères attendre encore",
        target: 10,
      },
    ],
  },
  {
    text: "Il faut faire vite. Tu attrapes les documents et te rues vers la sortie de la façon la plus calme possible, tâchant de dissimuler ton excitation pour cette victoire. Une fois dehors, tu regardes ta montre: huit heures, tu vas être en retard pour les cours.\n\nCe n’est qu’un mercredi, la matinée passe rapidement et une fois ton déjeuner dévoré dans la hâte, tu files dans ta chambre pour ouvrir le précieux fichier. La première feuille a pour titre “historique de la localisation de la clé usb NASA700152.” Tu te rappelles alors que tu as lu quelque part que certains programmes installés dans des clés permettent d’envoyer un message à un autre pc à chaque fois qu’un dossier est ouvert. Le programme peut également hacker l’ordinateur qui ouvre la clé et envoyer des données personnelles comme la localisation. Le document que tu tiens entre tes mains est donc la liste des dernières positions d’une clé. Tout en bas, on peut lire:\n\n51, avenue de Nantes, 44116, Vieillevigne - Raphaël Thomassey.\n\nTu sursautes. Les autres feuilles sont des photos de Raphaël, des images de sa maison. Comment Raphaël s’était-il procuré une clé usb appartenant à ce John Henry ? A-t-il découvert quelque chose de trop ? Il faut que tu en saches plus sur la carrière de l’ingénieur. Tu commences à chercher sur internet des informations, mais tu te rends compte qu’à part ses inventions, on ne sait quasiment rien de ses activités. ",
    buttons: [
      {
        text: "Tu pars de ballader",
        target: 12,
      },
    ],
  },
  {
    text: "Non, l’appel risque d’être trop bref, et puis il pourrait t’entendre, il est juste derrière la porte… Il vaut mieux attendre encore un peu. Mais l’appel prend fin au bout de dix bonnes minutes de doute et l’homme rouvre la porte et fustige:\n\n-Que fais-tu encore là gamine. Va voir ailleurs !\n\nOups… tu n’aurais pas dû douter autant. Recommence l’aventure.",
    buttons: [
      {
        text: "RECOMMENCER",
        target: 0,
      },
    ],
  },
  {
    text: "-J’ai un peu la flemme, et puis j’ai envie d’être à l’heure en cours, déjà qu’on habite loin…\n\n-Comme tu voudras, mais dépêche-toi alors.\n\nLe petit-déjeuner terminé et ton sac bouclé, tu sors dans la rue.\n\n-Où est passée la voiture? demandes-tu à ta mère qui doit t’emmener.\n\n-Rappelle-toi, avec le camion des travaux hier, j’ai dû me garer plus loin, au bout de la rue. Sur le chemin, vous croisez un homme affairé, une sacoche à la main, qui marche d’un pas pressé. Ta mère l’esquive, mais, encore mal réveillée, tu le percutes de plein fouet. Tu bafouilles des excuses mais il se contente de grogner et continue sa route. Avant de reprendre la tienne, tu te rends compte qu’il a laissé tomber une pochette. Tu voudrais l’interpeller, mais il est déjà loin et il pénètre dans un bus. Trop tard. Tu glisses le document rapidement dans ton sac, sans réfléchir.\n\nCe n’est qu’un mercredi, la matinée passe rapidement et une fois ton déjeuner dévoré dans la hâte, tu files dans ta chambre. En ouvrant ton sac de cours, tu retrouves le fichier. La curiosité est trop grande et t’a mordue toute la journée, alors tu oses l’ouvrir. La première feuille a pour titre “historique de la localisation de la clé usb NASA700152.” Tu te rappelles alors que tu as lu quelque part que certains programmes installés dans des clés permettent d’envoyer un message à un autre pc à chaque fois qu’un dossier est ouvert. Le programme peut également hacker l’ordinateur qui ouvre la clé et envoyer des données personnelles comme la localisation. Le document que tu tiens entre tes mains est donc la liste des dernières positions d’une clé. Tout en bas, on peut lire:\n\n51, avenue de Nantes, 44116, Vieillevigne - Raphaël Thomassey.\n\nTu sursautes. Les autres feuilles sont des photos de Raphaël, des images de sa maison. Une carte de visite traîne dans le fond:\n\nJohn Henry- Ingénieur\n\nComment Raphaël s’était-il procuré une clé usb appartenant à ce John Henry ? Est-ce lui qui l’a enlevé à la sortie ? Il faut que tu en saches plus sur la carrière de l’ingénieur. Tu commences à chercher sur internet des informations, mais tu te rends compte qu’à part ses inventions, on ne sait quasiment rien de ses activités.",
    buttons: [
      {
        text: "Tu pars de ballader",
        target: 12,
      },
      {
        text: "Tu pars aux archives",
        target: 14,
      },
    ],
  },
  {
    text: "Pour te changer les idées, tu pars te promener à pied dans Nantes. Peut-être trouveras-tu de l'inspiration… Soudain on t’interpelle:\n\n-Eh gamine ! Le ragondin veut te voir au bar du vieux rat !\n\nTu as à peine le temps de te retourner que la voix a disparu.",
    buttons: [
      {
        text: "Tu vas au rendez-vous",
        target: 13,
      },
    ],
  },
  {
    text: "Ce nom de bar te dit quelque chose. C’est un bistrot plutôt mal famé où tu n’as jamais osé mettre les pieds, juste à côté de Malakoff. Tant pis, tu t’y rends quand même, il vaut mieux ne négliger aucune piste. Après une bonne heure de marche, tu pousses enfin la porte grinçante du sombre établissement. Il ne semble y avoir personne à part un vieux bourré qui marmonne dans sa bière bon marché et le barman. Tu t’adresses à ce dernier:\n\n-Bonjour monsieur, connaissez-vous une personne qui se fait appeler “le ragondin”, je dois…\n\nMais l’homme l'interrompt dans un rire.\n\n-Ahr ah ah! Elle veut voir le patron ! C’est pas un coin pour les petites filles ici.\n\nSoudain un couteau vient se planter dans le mur, juste à côté de la tête du barman. Derrière toi un homme gros type aux dents jaunes vient de descendre des marches. Le barman s’arrête de rire. -Tu lui veux quoi, au ragondin ? Ah, je vois, tu dois être Aude, la mignonne qui se mêle d’un peu trop près à nos affaires, pire que l’autre… Allez, on joue pas comme ça avec la patronne. Dis-nous où en est John Henry dans ses recherches…",
    buttons: [
      {
        text: "Tu fuis !",
        target: 19,
      },
      {
        text: "Tu te tais",
        target: 20,
      },
    ],
  },
  {
    text: "Les archives publiques de Nantes sont assez silencieuses, étant donné qu’il n’y a pas grand monde. Hélas, rien d’intéressant sur John Henry. Tu questionnes un archiviste, mais il te répond que toutes les informations intéressantes sont dans la partie supérieure, réservée aux étudiants et aux adultes. ",
    buttons: [
      {
        text: "Tu tentes de négocier avec le chef archiviste",
        target: 15,
      },
    ],
  },
  {
    text: "-Ah, enfin une jeune qui s’intéresse au passé ! Te dit le chef archiviste avec un sourire. On dirait moi au même âge ! Allez comme je ne vais pas non plus ouvrir la porte à tout le monde, je te pose juste cette question: un enfant est sourd, aveugle et muet. Combien de sens lui reste-t-il ?",
    buttons: [
      {
        text: "2",
        target: 16,
      },
      {
        text: "3",
        target: 17,
      },
      {
        text: "4",
        target: 18,
      },
    ],
  },
  {
    text: "Tu réponds sans hésiter :\n\n-Deux !\n\nMais le chef archiviste désapprouve. Échec, tu peux revenir au départ.",
    buttons: [
      {
        text: "RECOMMENCER",
        target: 0,
      },
    ],
  },
  {
    text: "Tu réponds sans hésiter :\n\n-Trois !\n\n-Bien vu ! La parole n’est pas un sens ! Tu peux y aller, ne bouscule rien !\n\nTu te mets de nouveau au travail et parviens vite à découvrir d'anciens numéros d’un petit magazine privé et pas vraiment officiel en anglais relatant les recherches et les projets en cours de la NASA, écrit par un journaliste particulièrement fouineur. De nombreux articles mentionnent John Henry. Il aurait donc, selon un article, travaillé sur un important projet en collaboration avec KIX. KIX ! L’entreprise où tes camarades ont disparu ! Le puzzle prend de plus en plus de pièces, mais impossible de les assembler… Un second article mentionne des tensions au sein du groupe chargé du fameux projet (qui ne semble porter aucun nom), notamment entre Katrina et John. L’étude semble aussi porter à la controverse, on parle de risques immenses… Et dans les numéros suivants, plus rien. John a complètement disparu, le “projet” également. Encore une couche de mystère qui s’ajoute. Que contenait la clé de Raphaël ? Et si c’était ce si dangereux travail ? John est-il un criminel ? Il te vient alors une idée absurde : pourquoi ne pas aller le voir ? C’est un peu bête, mais il y a peut-être quelque chose à tenter. ",
    buttons: [
      {
        text: "tu y vas",
        target: 23,
      },
    ],
  },
  {
    text: "Tu réponds sans hésiter :\n\n-Quatre !\n\nMais le chef archiviste désapprouve. Échec, tu peux revenir au départ.",
    buttons: [
      {
        text: "RECOMMENCER",
        target: 0,
      },
    ],
  },
  {
    text: "Cet homme te glace le sang. Tu ne vois qu’une chose à faire : courir ! Tu t’élances, mais tu n’avais pas remarqué les hommes de main qui suivaient le ragondin. en un instant tu es plaquée au sol et tu perds conscience…\n\nÉchec. recommence l’aventure.",
    buttons: [
      {
        text: "RECOMMENCER",
        target: 0,
      },
    ],
  },
  {
    text: "Pétrifiée, aucun son ne sort de ta bouche.\n\n-Très bien, dit le ragondin, conduisez-la à la cave, le temps qu’elle devienne raisonnable…\n\nTu es poussée de force dans un sous-sol humide. Les gardes de font pénétrer dans une pièce délabrée, et claquent la porte derrière toi, avant de la fermer à double tour, dans un ricanement:\n\n-Y’a qu’à toquer, si tu retrouves la parole.\n\nUn gargouillement retentit derrière toi: de l’eau se déverse d’un large trou dans le mur. La porte est étanche: dans deux minutes c’est la noyade… Il faut réfléchir vite: tes cuisses trempent déjà. Autour de toi il n’y a qu’une table bancale sur laquelle est posée un vieux chiffon et un briquet rouillé. Au mur est accroché un boîtier blanc. Que faire ?",
    buttons: [
      {
        text: "Utiliser le chiffon",
        target: 21,
      },
      {
        text: "Utiliser le briquet",
        target: 22,
      },
    ],
  },
  {
    text: "Dans un élan désespéré, tu saisis le chiffon et tentes de le caler dans le trou pour stopper l’afflux d’eau, sans succès. Le courant est bien trop fort et il recrache le bout de tissu. Il n’y a maintenant plus que quelques centimètres d’air dans la pièce.\n\nLa noyade est imminente. Tu peux revenir au départ.",
    buttons: [
      {
        text: "RECOMMENCER",
        target: 0,
      },
    ],
  },
  {
    text: "Il te vient une idée de génie. Tu attrapes le briquet et cours vers le boîtier. Si le bâtiment respecte un minimum de normes, L’alarme incendie est encore fonctionnelle. Tu peines à produire un maximum d’étincelles à côté de ce qui est sans aucun doute un détecteur, Et une puissante sirène retentit enfin. Tu entends la voix d’un garde derrière la porte:\n\n-Fuyez, ou les pompiers vont nous griller !\n\nFaute de brûler, tu risques d'être bientôt envahie par l’eau, quand soudain la porte de ta cellule est violemment défoncée, évacuant brusquement toute l’eau. John Henry apparaît alors. C’est donc lui le second captif !\n\n-Pas mal, le coup de l’alarme pour évacuer tout le monde. Suis-moi, ça ne les écartera pas longtemps.\n\nSortis, du bar qui a été complètement évacué, vous montez dans le premier taxi venu, qui vous dépose à l’appartement de John. ",
    buttons: [
      {
        text: "suite",
        target: 23,
      },
    ],
  },
  {
    text: "Une fois arrivée, tu oses demander:\n\n-S’il vous plaît, monsieur, laissez-moi vous aider à trouver Raphaël !\n\n-Arrête de m’importuner, gamine ! Tu n’as aucune idée de ce qui se trame !\n\n-Mais je sais au moins que Raphaël a disparu durant une sortie de classe se déroulant à KIX industries, réponds-tu.\n\nJohn blêmit.\n\n-Quoi? Ah, les scélérats ! Je parie qu’ils ont utilisé la technique de l’ambulance.\n\n-La technique de l’ambulance ? demandes-tu.\n\n-Oui, on fait croire à un accident, et on évacue les “malades” avec un fourgon déguisé. Bon, j’accepte de te faire confiance gamine.\n\n-Vraiment ?\n\nL’homme soupire et acquiesce.\n\n-Si c’est bien KIX qui a ma clé, tes amis sont sans doute retenus sur l’une de leurs îles… On pourrait savoir laquelle si tu parviens à t’introduire à l’étage du bar du gros rat, qui sert d’établissement de façade au repaire des hommes de main. Là-bas, il y a un ordinateur qui a accès à la base de données de l’entreprise et à tous les rapports de ses actions illicites.\n\nTu réponds, toute excitée d’enfin participer:\n\n-Bon je fais ça quand ? ",
    buttons: [
      {
        text: "De nuit",
        target: 24,
      },
      {
        text: "De jour",
        target: 25,
      },
    ],
  },
  {
    text: "La nuit est déjà tombée quand tu t’approches du bar. Tu n’as pas prévu de plan précis, laissant place à l’improvisation. Par où passer? ",
    buttons: [
      {
        text: "Grimper à la fenêtre de l'étage",
        target: 26,
      },
      {
        text: "Passer par la porte",
        target: 27,
      },
    ],
  },
  {
    text: "Le lendemain, tu pénètres dans le bar, habillé en sale gosse des rues. John t’a dit que les malfrats sous les ordres de KIX s’en servent beaucoup, si bien qu’un nouveau ne paraît pas suspect.\n\n-Message pour le ragondin ! cries-tu bien fort en te dirigeant vers les escaliers.\n\nUn homme accoudé au bar te répond:\n\n-Eh, pas si vite, gamin ! Donne, je le transmettrai.\n\n-C’est un message oral, j’ai pas de papier, répliques-tu impassiblement.\n\nL’homme te croit et te laisse passer. John avait raison. “Quand on connaît le nom du ragondin, il suffit d’avoir un ton confiant et tout passe” avait-il dit. ",
    buttons: [
      {
        text: "suite",
        target: 28,
      },
    ],
  },
  {
    text: "La vieille bâtisse est faite de briques abîmées. Il y a pas mal de prises et tu atteins sans peine le rebord de la fenêtre de l’étage. Après l’avoir soigneusement découpée avec un diamant de John, tu rentres comme un chat dans la pièce. ",
    buttons: [
      {
        text: "suite",
        target: 28,
      },
    ],
  },

  {
    text: "Tu t’avances vers l'entrée principale. Curieusement, la porte n’est pas fermée. Tu fais quelques pas dans le bar quand une alarme retentit : tu n’aurais pas dû prendre cette infiltration à la légère.\n\nÉchec. Recommence l’aventure.",
    buttons: [
      {
        text: "RECOMMENCER",
        target: 0,
      },
    ],
  },
  {
    text: "Le bureau est mal éclairé, tu allumes ta lampe frontale et découvres l’ordinateur que tu mets aussitôt en marche. Tu ne tardes pas à te connecter au réseau privé des activités sombres de KIX. Une opération en cours a bien été mise en évidence: “Détention des témoins” Au moment de l’ouvrir un mot de passe est demandé. Etrange, John ne t’avait pas parlé de cela. Tu fouilles autour de toi, affolée en quête d’un indice. Tu finis après plusieurs minutes interminables par trouver ce post-it:\n\n0,1,1,2,3,5,8,13,21, ?\n\nLe code est donc:",
    buttons: [
      {
        text: "44",
        target: 29,
      },
      {
        text: "35",
        target: 29,
      },
      {
        text: "34",
        target: 30,
      },
    ],
  },
  {
    text: "Tu tapes rapidement ta réponse… Mais ce n’est pas la bonne. Pas le temps de réessayer, une alarme retentit déjà.\n\nÉchec. Reviens au départ.",
    buttons: [
      {
        text: "RECOMMENCER",
        target: 0,
      },
    ],
  },
  {
    text: "Tu tapes ta réponse… C’est la bonne ! Le document fait des pages et des pages de procédure. Soudain tu entends le cri strident de l’alarme. Des pas bruyants montent déjà les escaliers. Pas le temps de tout lire, tu retiens l’essentiel: tes amis sont retenus à l’ Île Desten, dans la mer des Caraïbes. Maintenant, il faut fuir: le bureau est sous les combles, une lucarne permet d’accéder aux toits. Sinon, une porte semble mener à une autre pièce.",
    buttons: [
      {
        text: "Passer par la lucarne",
        target: 34,
      },
      {
        text: "Passer par la porte",
        target: 31,
      },
    ],
  },
  {
    text: "La porte est verrouillée, mais semble assez vieille pour être défoncée. Vite, tu redoubles d’efforts pour la faire céder. Elle tombe enfin quand les gardes entrent dans la pièce. La salle que tu viens d’ouvrir est un débarras où s'entassent des appareils en tous genres et des pièces de métal. Au fond, une fenêtre donne sur les ruelles. Tu devrais pouvoir sauter sans encombre. Une balle vole au-dessus de ta tête. Il faut que tu trouves quelque chose pour te protéger ! Plusieurs plaques de métal gisent à tes pieds, mais elles sont toutes différentes. Laquelle te sauvera?",
    buttons: [
      {
        text: "La plaque bleue",
        target: 32,
      },
      {
        text: "La blanche",
        target: 33,
      },
      {
        text: "La noire",
        target: 33,
      },
    ],
  },
  {
    text: "Tu as bien choisi, tous les projectiles ricochent et aucun ne te touche. En courant vers la fenêtre, tu entends un garde jurer:\n\n-Merde, elle s’est servie du nainium ! Le blindage du vieux John !\n\nTu sautes par la fenêtre et atteris dans une pile de cartons. Les ruelles sont étroites et il y fait si sombre que tu parviens à semer tes poursuivants.",
    buttons: [
      {
        text: "suite",
        target: 35,
      },
    ],
  },
  {
    text: "Une nouvelle balle siffle et ta protection vole en éclats. La prochaine fois, c'est le tour de ta tête...\n\n Echec. Reviens au départ.",
    buttons: [
      {
        text: "RECOMMENCER",
        target: 0,
      },
    ],
  },
  {
    text: "Tu mets tous tes efforts pour te hisser sur le toit. Un garde tente de te rejoindre mais tu lui assènes un coup de pied en pleine figure dès qu’il pointe sa tête. Tu cours comme tu peux sur les tuiles fuyantes sous tes pieds, puis regagnes enfin la terre ferme.",
    buttons: [
      {
        text: "suite",
        target: 35,
      },
    ],
  },
  {
    text: "Enfin en sécurité, tu regagnes l'appartement de John. Son visage s’éclaire en entendant le nom de l’Île Desten.\n\n-Enfin, dit-il, enfin je reprends la main dans cette histoire ! Je te remercie pour tout, gamine. Écoute, j’ai pris une décision. Je ne récupèrerai pas la clé. Je la détruirai. Ce sera mieux pour tout le monde. Je dois partir le plus tôt possible, adieu.\n\n-Bonne chance monsieur Henry !\n\nEt c’est épuisée de ton escapade que tu reviens en cours. Après autant de mésaventures, le rythme immuable du quotidien te paraît presque stupide. C’est dingue à quel point on ignore tout ce qui se trame dans le monde !\n\n\nFIN\n\nFélicitations ! Tu as terminé l’aventure avec succès ! Encore joyeux anniversaire !",
    buttons: [
      {
        text: "BRAVO",
        target: 0,
      },
    ],
  },
  {
    text: "Salut, c'est le grand retour de cette appli que j'ai codée moi-même, dans le plus grand calme, au lieu de réviser mes cours. C'est la deuxième fois que j'écris ce texte à la va-vite au milieu du code, tranquille. Je n'ai pas grand-chose à dire, à part que bientôt, tu pourras demander à une IA de faire la V3 parce qu'il y a des nouvelles choses qui sont sorties et qui risquent de me mettre sur la touche. Bon courage à moi, on est pas ensemble.\n\nMais bon, le plus important, c'est quand même ton anniversaire, donc voilà 🎉 joyeux anniversaire ! 🎉.\n\nJe ne vais pas te remettre les autres pages inutiles avec un message peu émouvant expliquant comment automatiser l'écriture de mauvais code à 15 ans (j'allais oublier : dans ce livre, il y a une quarantaine de textes. Donc, pour éviter d'avoir à taper 40 lignes fois 12 parce qu'il y a un texte, 3 boutons et 3 endroits différents et que je dois tous les indiquer, j'ai créé une deuxième appli toute simple qui le fait à ma place, et j'ai juste à faire 3 gros copier-coller de 120 lignes). Bon, en fait je l'ai mis. Pour ne pas te laisser sans détail technique, je peux te dire que le mot de passe que tu dois entrer pour lire ça est encodé avec l'algorithme de chiffrement symétrique Blowfish. En gros, aucun moyen de casser le mot de passe, mais c'est très facile d'aller lire ce texte, il suffit d'ouvrir la console dans l'onglet réseau et il y a le JSON des textes. Allez, j'ai une appli à coder.",
    buttons: [
      {
        text: "COMMENCER",
        target: 0,
      },
    ],
  },
];
