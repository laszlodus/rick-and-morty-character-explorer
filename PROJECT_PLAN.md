## Roadmap

- [x] Header
- [x] Footer
- [x] HomePage
- [x] SearchBar
- [x] Character types
- [x] Fetch search results
- [x] Loading state
- [x] Error state
- [x] CharacterList
- [x] CharacterCard
- [ ] Pagination
- [ ] Character details page
- [ ] Episodes page
- [ ] Locations page
- [ ] Favorites
- [ ] Responsive design

## Component Structure

App
├── Header
├── Main
│ └── Routes
│ ├── HomePage
│ │ ├── SearchBar
│ │ ├── LoadingSpinner
│ │ ├── ErrorMessage
│ │ ├── CharacterList
│ │ │ └── CharacterCard
│ │ └── Pagination
│ ├── CharacterDetail
│ ├── EpisodesPage
│ └── LocationsPage
└── Footer
