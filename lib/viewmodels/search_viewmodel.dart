import 'package:flutter/material.dart';
import '../core/constants/raffle_data.dart';
import '../models/raffle.dart';

class SearchViewModel extends ChangeNotifier {
  final RaffleAppData _raffleData = RaffleAppData.getInstance();
  String _searchQuery = '';
  List<Raffle> _filteredRaffles = [];

  SearchViewModel() {
    _filteredRaffles = _raffleData.getAllRaffles();
  }

  String get searchQuery => _searchQuery;

  List<Raffle> get filteredRaffles => _filteredRaffles;

  void updateSearchQuery(String query) {
    _searchQuery = query.toLowerCase();
    if (_searchQuery.isEmpty) {
      _filteredRaffles = _raffleData.getAllRaffles();
    } else {
      _filteredRaffles = _raffleData.getAllRaffles().where((raffle) {
        final title = raffle.title?.toLowerCase() ?? '';
        final description = raffle.description?.toLowerCase() ?? '';
        return title.contains(_searchQuery) || description.contains(_searchQuery);
      }).toList();
    }
    notifyListeners();
  }

  List<Raffle> getFilteredFeaturedRaffles() {
    return _filteredRaffles.where((raffle) => raffle.type == 'featured').toList();
  }

  List<Raffle> getFilteredEndingSoonRaffles([int daysThreshold = 7]) {
    return _filteredRaffles.where((raffle) {
      final daysLeft = RaffleAppData.getDaysLeft(raffle.endDate!);
      return daysLeft > 0 && daysLeft <= daysThreshold;
    }).toList();
  }
}