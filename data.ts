import { Paper, PaperStatus, PaperType } from './types';

export const papers: Paper[] = [
    {
        id: 'p4',
        title: 'SketchMind: Understanding Abstract Sketches with MLLMs for Fine-Grained Sketch-Based Image Retrieval',
        authors: ['Chang-Xing Li', 'Donglin Zhang', 'Zhikai Hu', 'Xiao-Jun Wu', 'Josef Kittler'],
        venue: 'ACM Web Conference (WWW)',
        year: '2026',
        status: PaperStatus.ACCEPTED,
        type: PaperType.CONFERENCE,
        rank: 'CCF-A',
    },

    {
      id: 'p3',
      title: 'Multi-level Encoding with Hierarchical Alignment for Sketch-Based 3D Shape Retrieval',
      authors: ['Donglin Zhang', 'Chang-Xing Li', 'Xiao-Jun Wu'],
      venue: 'ACM Proceedings of the 48th International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)',
      year: '2025',
      status: PaperStatus.ACCEPTED,
      type: PaperType.CONFERENCE,
      rank: 'CCF-A',
      isOral: true,
    },

    {
      id: 'p2',
      title: 'Discrete Elective Hashing with Incomplete Labels for Efficient Cross-Modal Retrieval',
      authors: ['Donglin Zhang', 'Chang-Xing Li', 'Mengke Li', 'Zhikai Hu'],
      venue: 'ACM Transactions on Multimedia Computing, Communications and Applications (TOMM)',
      year: '2025',
      status: PaperStatus.ACCEPTED,
      type: PaperType.JOURNAL,
      rank: 'CCF-B',
    },

    {
      id: 'p1',
      title: 'Modality Fused Class-Proxy with Knowledge Distillation for Zero-Shot Sketch-based Image Retrieval',
      authors: ['Chang-Xing Li', 'Donglin Zhang', 'Zhikai Hu', 'Xiao-Jun Wu'],
      venue: 'IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)',
      year: '2025',
      status: PaperStatus.ACCEPTED,
      type: PaperType.JOURNAL,
      rank: 'CCF-B',
    },
];
