import 'package:flutter/material.dart';
import 'package:myapp/viewmodels/search_viewmodel.dart';
import 'package:provider/provider.dart';

class SearchBar extends StatelessWidget {
  const SearchBar({super.key});

  @override
  Widget build(BuildContext context) {
    final searchViewModel = Provider.of<SearchViewModel>(
      context,
      listen: false,
    );
    final theme = Theme.of(context);

    return Container(
      padding: EdgeInsets.all(16),
      child: TextField(
        decoration: InputDecoration(
          labelText: 'Search',
          hintText: 'Search for a raffle',
          border: OutlineInputBorder(),
          prefixIcon: Icon(Icons.search),
        ),
      ),
    );
  }
}
